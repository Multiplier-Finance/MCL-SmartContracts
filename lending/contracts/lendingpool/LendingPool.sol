pragma solidity ^0.5.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.4.0/contracts/math/SafeMath.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.4.0/contracts/utils/ReentrancyGuard.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.4.0/contracts/utils/Address.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.4.0/contracts/token/ERC20/IERC20.sol";
import "../libraries/openzeppelin-upgradeability/VersionedInitializable.sol";

import "../configuration/LendingPoolAddressesProvider.sol";
import "../configuration/LendingPoolParametersProvider.sol";
import "../tokenization/MToken.sol";
import "../libraries/CoreLibrary.sol";
import "../libraries/WadRayMath.sol";
import "../interfaces/IFeeProvider.sol";
import "../rewards/RewardsManager.sol";
import "../flashloan/interfaces/IFlashLoanReceiver.sol";
import "./LendingPoolCore.sol";
import "./LendingPoolDataProvider.sol";
import "./LendingPoolLiquidationManager.sol";
import "../libraries/BscAddressLib.sol";

/**
 * @title LendingPool contract
 * @notice Implements the actions of the LendingPool, and exposes accessory
 * methods to fetch the users and reserve data
 * @author Multiplier Finance
 **/

contract LendingPool is ReentrancyGuard, VersionedInitializable {
    using SafeMath for uint256;
    using WadRayMath for uint256;
    using Address for address;

    LendingPoolAddressesProvider public addressesProvider;
    LendingPoolCore public core;
    LendingPoolDataProvider public dataProvider;
    LendingPoolParametersProvider public parametersProvider;
    IFeeProvider public feeProvider;
    RewardsManager public rewardsMgr;

    /**
     * @dev emitted on deposit
     * @param _reserve the address of the reserve
     * @param _user the address of the user
     * @param _amount the amount to be deposited
     * @param _referral the referral number of the action
     * @param _timestamp the timestamp of the action
     **/
    event Deposit(
        address indexed _reserve,
        address indexed _user,
        uint256 _amount,
        uint16 indexed _referral,
        uint256 _timestamp
    );

    /**
     * @dev emitted during a redeem action.
     * @param _reserve the address of the reserve
     * @param _user the address of the user
     * @param _amount the amount to be deposited
     * @param _timestamp the timestamp of the action
     **/
    event RedeemUnderlying(
        address indexed _reserve,
        address indexed _user,
        uint256 _amount,
        uint256 _timestamp
    );

    /**
     * @dev emitted on borrow
     * @param _reserve the address of the reserve
     * @param _user the address of the user
     * @param _amount the amount to be deposited
     * @param _borrowRateMode the rate mode, can be either 1-stable or 2-variable
     * @param _borrowRate the rate at which the user has borrowed
     * @param _originationFee the origination fee to be paid by the user
     * @param _borrowBalanceIncrease the balance increase since the last borrow,
     * 0 if it's the first time borrowing
     * @param _referral the referral number of the action
     * @param _timestamp the timestamp of the action
     **/
    event Borrow(
        address indexed _reserve,
        address indexed _user,
        uint256 _amount,
        uint256 _borrowRateMode,
        uint256 _borrowRate,
        uint256 _originationFee,
        uint256 _borrowBalanceIncrease,
        uint16 indexed _referral,
        uint256 _timestamp
    );

    /**
     * @dev emitted on repay
     * @param _reserve the address of the reserve
     * @param _user the address of the user for which the repay has been executed
     * @param _repayer the address of the user that has performed the repay
     * action
     * @param _amountMinusFees the amount repaid minus fees
     * @param _fees the fees repaid
     * @param _borrowBalanceIncrease the balance increase since the last action
     * @param _timestamp the timestamp of the action
     **/
    event Repay(
        address indexed _reserve,
        address indexed _user,
        address indexed _repayer,
        uint256 _amountMinusFees,
        uint256 _fees,
        uint256 _borrowBalanceIncrease,
        uint256 _timestamp
    );

    /**
     * @dev emitted when a user performs a rate swap
     * @param _reserve the address of the reserve
     * @param _user the address of the user executing the swap
     * @param _newRateMode the new interest rate mode
     * @param _newRate the new borrow rate
     * @param _borrowBalanceIncrease the balance increase since the last action
     * @param _timestamp the timestamp of the action
     **/
    event Swap(
        address indexed _reserve,
        address indexed _user,
        uint256 _newRateMode,
        uint256 _newRate,
        uint256 _borrowBalanceIncrease,
        uint256 _timestamp
    );

    /**
     * @dev emitted when a user enables a reserve as collateral
     * @param _reserve the address of the reserve
     * @param _user the address of the user
     **/
    event ReserveUsedAsCollateralEnabled(
        address indexed _reserve,
        address indexed _user
    );

    /**
     * @dev emitted when a user disables a reserve as collateral
     * @param _reserve the address of the reserve
     * @param _user the address of the user
     **/
    event ReserveUsedAsCollateralDisabled(
        address indexed _reserve,
        address indexed _user
    );

    /**
     * @dev emitted when the stable rate of a user gets rebalanced
     * @param _reserve the address of the reserve
     * @param _user the address of the user for which the rebalance has been
     * executed
     * @param _newStableRate the new stable borrow rate after the rebalance
     * @param _borrowBalanceIncrease the balance increase since the last action
     * @param _timestamp the timestamp of the action
     **/
    event RebalanceStableBorrowRate(
        address indexed _reserve,
        address indexed _user,
        uint256 _newStableRate,
        uint256 _borrowBalanceIncrease,
        uint256 _timestamp
    );

    /**
     * @dev emitted when a flashloan is executed
     * @param _target the address of the flashLoanReceiver
     * @param _reserve the address of the reserve
     * @param _amount the amount requested
     * @param _timestamp the timestamp of the action
     **/
    event FlashLoan(
        address indexed _target,
        address indexed _reserve,
        uint256 _amount,
        uint256 _timestamp
    );

    /**
     * @dev these events are not emitted directly by the LendingPool
     * but they are declared here as the LendingPoolLiquidationManager
     * is executed using a delegateCall().
     * This allows to have the events in the generated ABI for LendingPool.
     **/

    /**
     * @dev emitted when a borrow fee is liquidated
     * @param _collateral the address of the collateral being liquidated
     * @param _reserve the address of the reserve
     * @param _user the address of the user being liquidated
     * @param _feeLiquidated the total fee liquidated
     * @param _liquidatedCollateralForFee the amount of collateral received by
     * the protocol in exchange for the fee
     * @param _timestamp the timestamp of the action
     **/
    event OriginationFeeLiquidated(
        address indexed _collateral,
        address indexed _reserve,
        address indexed _user,
        uint256 _feeLiquidated,
        uint256 _liquidatedCollateralForFee,
        uint256 _timestamp
    );

    /**
     * @dev emitted when a borrower is liquidated
     * @param _collateral the address of the collateral being liquidated
     * @param _reserve the address of the reserve
     * @param _user the address of the user being liquidated
     * @param _purchaseAmount the total amount liquidated
     * @param _liquidatedCollateralAmount the amount of collateral being
     * liquidated
     * @param _accruedBorrowInterest the amount of interest accrued by the
     * borrower since the last action
     * @param _liquidator the address of the liquidator
     * @param _receiveMToken true if the liquidator wants to receive
     * mTokens, false otherwise
     * @param _timestamp the timestamp of the action
     **/
    event LiquidationCall(
        address indexed _collateral,
        address indexed _reserve,
        address indexed _user,
        uint256 _purchaseAmount,
        uint256 _liquidatedCollateralAmount,
        uint256 _accruedBorrowInterest,
        address _liquidator,
        bool _receiveMToken,
        uint256 _timestamp
    );

    /**
     * @dev emitted when user claim reward.
     * @param _reserve the address of the reserve
     * @param _user the address of the user for which the reward was claimed to
     * @param _amount the amount of reward
     * @param _timestamp the timestamp of the action
     **/
    event ClaimReward(
        address indexed _reserve,
        address indexed _user,
        uint256 _amount,
        uint256 _timestamp
    );

    /**
     * @dev functions affected by this modifier can only be invoked by the
     * mToken.sol contract
     * @param _reserve the address of the reserve
     **/
    modifier onlyOverlyingmToken(address _reserve) {
        require(
            msg.sender == core.getReservemTokenAddress(_reserve),
            "The caller of this function can only be the mToken contract of this reserve"
        );
        _;
    }

    /**
     * @dev functions affected by this modifier can only be invoked if the
     * reserve is active
     * @param _reserve the address of the reserve
     **/
    modifier onlyActiveReserve(address _reserve) {
        requireReserveActiveInternal(_reserve);
        _;
    }

    /**
     * @dev functions affected by this modifier can only be invoked if the
     * reserve is not freezed.
     * A freezed reserve only allows redeems, repays, rebalances and
     * liquidations.
     * @param _reserve the address of the reserve
     **/
    modifier onlyUnfreezedReserve(address _reserve) {
        requireReserveNotFreezedInternal(_reserve);
        _;
    }

    /**
     * @dev functions affected by this modifier can only be invoked if the
     * provided _amount input parameter
     * is not zero.
     * @param _amount the amount provided
     **/
    modifier onlyAmountGreaterThanZero(uint256 _amount) {
        requireAmountGreaterThanZeroInternal(_amount);
        _;
    }

    uint256 public constant UINT_MAX_VALUE = uint256(-1);

    uint256 public constant LENDINGPOOL_REVISION = 0x1;

    function getRevision() internal pure returns (uint256) {
        return LENDINGPOOL_REVISION;
    }

    /**
     * @dev this function is invoked by the proxy contract when the LendingPool
     * contract is added to the
     * AddressesProvider.
     * @param _addressesProvider the address of the LendingPoolAddressesProvider
     * registry
     **/
    function initialize(LendingPoolAddressesProvider _addressesProvider)
        public
        initializer
    {
        addressesProvider = _addressesProvider;
        core = LendingPoolCore(addressesProvider.getLendingPoolCore());
        dataProvider = LendingPoolDataProvider(
            addressesProvider.getLendingPoolDataProvider()
        );
        parametersProvider = LendingPoolParametersProvider(
            addressesProvider.getLendingPoolParametersProvider()
        );
        feeProvider = IFeeProvider(addressesProvider.getFeeProvider());
    }

    /**
     * @dev deposits The underlying asset into the reserve. A corresponding
     * amount of the overlying asset (mTokens)
     * is minted.
     * @param _reserve the address of the reserve
     * @param _amount the amount to be deposited
     * @param _referralCode integrators are assigned a referral code and can
     * potentially receive rewards.
     **/
    function deposit(
        address _reserve,
        uint256 _amount,
        uint16 _referralCode
    )
        external
        payable
        nonReentrant
        onlyActiveReserve(_reserve)
        onlyUnfreezedReserve(_reserve)
        onlyAmountGreaterThanZero(_amount)
    {
        uint256 curBalance =
            core.getUserUnderlyingAssetBalance(_reserve, msg.sender);
        bool isFirstDeposit = (curBalance == 0);

        core.updateStateOnDeposit(
            _reserve,
            msg.sender,
            _amount,
            isFirstDeposit
        );

        //minting mToken to user 1:1 with the specific exchange rate
        mToken mToken = mToken(core.getReservemTokenAddress(_reserve));
        mToken.mintOnDeposit(msg.sender, _amount);

        //transfer to the core contract
        core.transferToReserve.value(msg.value)(_reserve, msg.sender, _amount);

        //solium-disable-next-line
        emit Deposit(
            _reserve,
            msg.sender,
            _amount,
            _referralCode,
            block.timestamp
        );
    }

    /**
     * @dev Redeems the underlying amount of assets requested by _user.
     * This function is executed by the overlying mToken contract in response
     * to a redeem action.
     * @param _reserve the address of the reserve
     * @param _user the address of the user performing the action
     * @param _amount the underlying amount to be redeemed
     **/
    function redeemUnderlying(
        address _reserve,
        address payable _user,
        uint256 _amount,
        uint256 _mTokenBalanceAfterRedeem
    )
        external
        nonReentrant
        onlyOverlyingmToken(_reserve)
        onlyActiveReserve(_reserve)
        onlyAmountGreaterThanZero(_amount)
    {
        uint256 currentAvailableLiquidity =
            core.getReserveAvailableLiquidity(_reserve);
        require(
            currentAvailableLiquidity >= _amount,
            "There is not enough liquidity available to redeem"
        );

        core.updateStateOnRedeem(
            _reserve,
            _user,
            _amount,
            _mTokenBalanceAfterRedeem == 0
        );

        core.transferToUser(_reserve, _user, _amount);

        //solium-disable-next-line
        emit RedeemUnderlying(_reserve, _user, _amount, block.timestamp);
    }

    /**
     * @dev data structures for local computations in the borrow() method.
     */

    struct BorrowLocalVars {
        uint256 principalBorrowBalance;
        uint256 currentLtv;
        uint256 currentLiquidationThreshold;
        uint256 borrowFee;
        uint256 requestedBorrowAmountBNB;
        uint256 amountOfCollateralNeededBNB;
        uint256 userCollateralBalanceBNB;
        uint256 userBorrowBalanceBNB;
        uint256 userTotalFeesBNB;
        uint256 borrowBalanceIncrease;
        uint256 currentReserveStableRate;
        uint256 availableLiquidity;
        uint256 reserveDecimals;
        uint256 finalUserBorrowRate;
        CoreLibrary.InterestRateMode rateMode;
        bool healthFactorBelowThreshold;
    }

    /**
     * @dev Allows users to borrow a specific amount of the reserve currency,
     * provided that the borrower
     * already deposited enough collateral.
     * @param _reserve the address of the reserve
     * @param _amount the amount to be borrowed
     * @param _interestRateMode the interest rate mode at which the user wants
     * to borrow. Can be 0 (STABLE) or 1 (VARIABLE)
     **/
    function borrow(
        address _reserve,
        uint256 _amount,
        uint256 _interestRateMode,
        uint16 _referralCode
    )
        external
        nonReentrant
        onlyActiveReserve(_reserve)
        onlyUnfreezedReserve(_reserve)
        onlyAmountGreaterThanZero(_amount)
    {
        // Usage of a memory struct of vars to avoid "Stack too deep" errors
        // due to local variables
        BorrowLocalVars memory vars;

        //check that the reserve is enabled for borrowing
        require(
            core.isReserveBorrowingEnabled(_reserve),
            "Reserve is not enabled for borrowing"
        );
        //validate interest rate mode
        require(
            uint256(CoreLibrary.InterestRateMode.VARIABLE) ==
                _interestRateMode ||
                uint256(CoreLibrary.InterestRateMode.STABLE) ==
                _interestRateMode,
            "Invalid interest rate mode selected"
        );

        //cast the rateMode to coreLibrary.interestRateMode
        vars.rateMode = CoreLibrary.InterestRateMode(_interestRateMode);

        //check that the amount is available in the reserve
        vars.availableLiquidity = core.getReserveAvailableLiquidity(_reserve);

        // Only allow the borrowing up to 99% of the availability liquidity
        require(
            !CoreLibrary.exceed99Percent(_amount, vars.availableLiquidity),
            "There is not enough liquidity available in the reserve"
        );

        (
            ,
            vars.userCollateralBalanceBNB,
            vars.userBorrowBalanceBNB,
            vars.userTotalFeesBNB,
            vars.currentLtv,
            vars.currentLiquidationThreshold,
            ,
            vars.healthFactorBelowThreshold
        ) = dataProvider.calculateUserGlobalData(msg.sender);

        require(
            vars.userCollateralBalanceBNB > 0,
            "The collateral balance is 0"
        );

        require(
            !vars.healthFactorBelowThreshold,
            "The borrower can already be liquidated so he cannot borrow more"
        );

        //calculating fees
        vars.borrowFee = feeProvider.calculateLoanOriginationFee(_amount);

        require(vars.borrowFee > 0, "The amount to borrow is too small");

        vars.amountOfCollateralNeededBNB = dataProvider
            .calculateCollateralNeededInBNB(
            _reserve,
            _amount,
            vars.borrowFee,
            vars.userBorrowBalanceBNB,
            vars.userTotalFeesBNB,
            vars.currentLtv
        );

        require(
            vars.amountOfCollateralNeededBNB <= vars.userCollateralBalanceBNB,
            "There is not enough collateral to cover a new borrow"
        );

        /**
         * Following conditions need to be met if the user is borrowing at a
         * stable rate:
         * 1. Reserve must be enabled for stable rate borrowing
         * 2. Users cannot borrow from the reserve if their collateral is
         * (mostly) the same currency
         *    they are borrowing, to prevent abuses.
         * 3. Users will be able to borrow only a relatively small, configurable
         * amount of the total
         *    liquidity
         **/

        if (vars.rateMode == CoreLibrary.InterestRateMode.STABLE) {
            //check if the borrow mode is stable and if stable rate borrowing is enabled on this reserve
            require(
                core.isUserAllowedToBorrowAtStable(
                    _reserve,
                    msg.sender,
                    _amount
                ),
                "User cannot borrow the selected amount with a stable rate"
            );

            //calculate the max available loan size in stable rate mode as a percentage of the
            //available liquidity
            uint256 maxLoanPercent =
                parametersProvider.getMaxStableRateBorrowSizePercent();
            uint256 maxLoanSizeStable =
                vars.availableLiquidity.mul(maxLoanPercent).div(100);

            require(
                _amount <= maxLoanSizeStable,
                "User is trying to borrow too much liquidity at a stable rate"
            );
        }

        //all conditions passed - borrow is accepted
        (vars.finalUserBorrowRate, vars.borrowBalanceIncrease) = core
            .updateStateOnBorrow(
            _reserve,
            msg.sender,
            _amount,
            vars.borrowFee,
            vars.rateMode
        );

        //if we reached this point, we can transfer
        core.transferToUser(_reserve, msg.sender, _amount);

        emit Borrow(
            _reserve,
            msg.sender,
            _amount,
            _interestRateMode,
            vars.finalUserBorrowRate,
            vars.borrowFee,
            vars.borrowBalanceIncrease,
            _referralCode,
            //solium-disable-next-line
            block.timestamp
        );
    }

    /**
     * @notice repays a borrow on the specific reserve, for the specified amount
     * (or for the whole amount, if uint256(-1) is specified).
     * @dev the target user is defined by _onBehalfOf. If there is no repayment
     * on behalf of another account,
     * _onBehalfOf must be equal to msg.sender.
     * @param _reserve the address of the reserve on which the user borrowed
     * @param _amount the amount to repay, or uint256(-1) if the user wants to
     * repay everything
     * @param _onBehalfOf the address for which msg.sender is repaying.
     **/

    struct RepayLocalVars {
        uint256 principalBorrowBalance;
        uint256 compoundedBorrowBalance;
        uint256 borrowBalanceIncrease;
        bool isBnb;
        uint256 paybackAmount;
        uint256 paybackAmountMinusFees;
        uint256 currentStableRate;
        uint256 originationFee;
        uint256 totalLiquidity;
    }

    struct RewardLocalVars {
        uint256 suppliers;
        uint256 governace;
    }

    function repay(
        address _reserve,
        uint256 _amount,
        address payable _onBehalfOf
    )
        external
        payable
        nonReentrant
        onlyActiveReserve(_reserve)
        onlyAmountGreaterThanZero(_amount)
    {
        // Usage of a memory struct of vars to avoid "Stack too deep" errors
        // due to local variables
        RepayLocalVars memory vars;

        (
            vars.principalBorrowBalance,
            vars.compoundedBorrowBalance,
            vars.borrowBalanceIncrease
        ) = core.getUserBorrowBalances(_reserve, _onBehalfOf);

        vars.originationFee = core.getUserOriginationFee(_reserve, _onBehalfOf);
        vars.isBnb = BscAddressLib.bnbAddress() == _reserve;

        require(
            vars.compoundedBorrowBalance > 0,
            "The user does not have any borrow pending"
        );

        require(
            _amount != UINT_MAX_VALUE || msg.sender == _onBehalfOf,
            "To repay on behalf of an user an explicit amount to repay is needed."
        );

        //default to max amount
        vars.paybackAmount = vars.compoundedBorrowBalance.add(
            vars.originationFee
        );

        if (_amount != UINT_MAX_VALUE && _amount < vars.paybackAmount) {
            vars.paybackAmount = _amount;
        }

        require(
            !vars.isBnb || msg.value >= vars.paybackAmount,
            "Invalid msg.value sent for the repayment"
        );

        // RewardManager : add reward item based on the fee paid back //
        //vars.totalLiquidity = core.getReserveTotalLiquidity(_reserve);
        uint256 feeReward = vars.originationFee;
        if (vars.paybackAmount <= vars.originationFee) {
            feeReward = vars.paybackAmount;
        }

        // Update and accumulate reward for this address.
        updateRewards(_reserve, _onBehalfOf);
        // RewardManager: Add new reward item. //
        addRewardItem(_reserve, feeReward);

        // if the amount is smaller than the origination fee, just transfer the
        // amount to the fee destination address
        if (vars.paybackAmount <= vars.originationFee) {
            core.updateStateOnRepay(
                _reserve,
                _onBehalfOf,
                0,
                vars.paybackAmount,
                vars.borrowBalanceIncrease,
                false
            );

            core.transferToFeeCollectionAddress.value(
                vars.isBnb ? vars.paybackAmount : 0
            )(_reserve, _onBehalfOf, vars.paybackAmount, false);

            emit Repay(
                _reserve,
                _onBehalfOf,
                msg.sender,
                0,
                vars.paybackAmount,
                vars.borrowBalanceIncrease,
                //solium-disable-next-line
                block.timestamp
            );
            return;
        }

        vars.paybackAmountMinusFees = vars.paybackAmount.sub(
            vars.originationFee
        );

        core.updateStateOnRepay(
            _reserve,
            _onBehalfOf,
            vars.paybackAmountMinusFees,
            vars.originationFee,
            vars.borrowBalanceIncrease,
            vars.compoundedBorrowBalance == vars.paybackAmountMinusFees
        );

        // if the user didn't repay the origination fee, transfer the fee to the
        // fee collection address
        if (vars.originationFee > 0) {
            core.transferToFeeCollectionAddress.value(
                vars.isBnb ? vars.originationFee : 0
            )(_reserve, msg.sender, vars.originationFee, false);
        }

        //sending the total msg.value if the transfer is BNB.
        //the transferToReserve() function will take care of sending the
        //excess BNB back to the caller
        core.transferToReserve.value(
            vars.isBnb ? msg.value.sub(vars.originationFee) : 0
        )(_reserve, msg.sender, vars.paybackAmountMinusFees);

        emit Repay(
            _reserve,
            _onBehalfOf,
            msg.sender,
            vars.paybackAmountMinusFees,
            vars.originationFee,
            vars.borrowBalanceIncrease,
            //solium-disable-next-line
            block.timestamp
        );
    }

    /**
     * @dev borrowers can user this function to swap between stable and variable
     * borrow rate modes.
     * @param _reserve the address of the reserve on which the user borrowed
     **/
    function swapBorrowRateMode(address _reserve)
        external
        nonReentrant
        onlyActiveReserve(_reserve)
        onlyUnfreezedReserve(_reserve)
    {
        (
            uint256 principalBorrowBalance,
            uint256 compoundedBorrowBalance,
            uint256 borrowBalanceIncrease
        ) = core.getUserBorrowBalances(_reserve, msg.sender);

        require(
            compoundedBorrowBalance > 0,
            "User does not have a borrow in progress on this reserve"
        );

        CoreLibrary.InterestRateMode currentRateMode =
            core.getUserCurrentBorrowRateMode(_reserve, msg.sender);

        if (currentRateMode == CoreLibrary.InterestRateMode.VARIABLE) {
            /**
             * user wants to swap to stable, before swapping we need to ensure
             * that
             * 1. stable borrow rate is enabled on the reserve
             * 2. user is not trying to abuse the reserve by depositing
             * more collateral than he is borrowing, artificially lowering
             * the interest rate, borrowing at variable, and switching to stable
             **/
            require(
                core.isUserAllowedToBorrowAtStable(
                    _reserve,
                    msg.sender,
                    compoundedBorrowBalance
                ),
                "User cannot borrow the selected amount at stable"
            );
        }

        (CoreLibrary.InterestRateMode newRateMode, uint256 newBorrowRate) =
            core.updateStateOnSwapRate(
                _reserve,
                msg.sender,
                principalBorrowBalance,
                compoundedBorrowBalance,
                borrowBalanceIncrease,
                currentRateMode
            );

        emit Swap(
            _reserve,
            msg.sender,
            uint256(newRateMode),
            newBorrowRate,
            borrowBalanceIncrease,
            //solium-disable-next-line
            block.timestamp
        );
    }

    /**
     * @dev rebalances the stable interest rate of a user if current liquidity
     * rate > user stable rate.
     * this is regulated by Multiplier to ensure that the protocol is not
     * abused, and the user is paying a fair
     * rate. Anyone can call this function though.
     * @param _reserve the address of the reserve
     * @param _user the address of the user to be rebalanced
     **/
    function rebalanceStableBorrowRate(address _reserve, address _user)
        external
        nonReentrant
        onlyActiveReserve(_reserve)
    {
        (, uint256 compoundedBalance, uint256 borrowBalanceIncrease) =
            core.getUserBorrowBalances(_reserve, _user);

        //step 1: user must be borrowing on _reserve at a stable rate
        require(
            compoundedBalance > 0,
            "User does not have any borrow for this reserve"
        );

        require(
            core.getUserCurrentBorrowRateMode(_reserve, _user) ==
                CoreLibrary.InterestRateMode.STABLE,
            "The user borrow is variable and cannot be rebalanced"
        );

        uint256 userCurrentStableRate =
            core.getUserCurrentStableBorrowRate(_reserve, _user);
        uint256 liquidityRate = core.getReserveCurrentLiquidityRate(_reserve);
        uint256 reserveCurrentStableRate =
            core.getReserveCurrentStableBorrowRate(_reserve);
        uint256 rebalanceDownRateThreshold =
            reserveCurrentStableRate.rayMul(
                WadRayMath.ray().add(
                    parametersProvider.getRebalanceDownRateDelta()
                )
            );

        // Step 2: we have two possible situations to rebalance:

        // 1. user stable borrow rate is below the current liquidity rate. The
        // loan needs to be rebalanced,
        // as this situation can be abused (user putting back the borrowed
        // liquidity in the same reserve to earn on it)
        // 2. user stable rate is above the market avg borrow rate of a certain
        // delta, and utilization rate is low.
        // In this case, the user is paying an interest that is too high, and
        // needs to be rescaled down.
        if (
            userCurrentStableRate < liquidityRate ||
            userCurrentStableRate > rebalanceDownRateThreshold
        ) {
            uint256 newStableRate =
                core.updateStateOnRebalance(
                    _reserve,
                    _user,
                    borrowBalanceIncrease
                );

            emit RebalanceStableBorrowRate(
                _reserve,
                _user,
                newStableRate,
                borrowBalanceIncrease,
                //solium-disable-next-line
                block.timestamp
            );

            return;
        }

        revert("Interest rate rebalance conditions were not met");
    }

    /**
     * @dev allows depositors to enable or disable a specific deposit as
     * collateral.
     * @param _reserve the address of the reserve
     * @param _useAsCollateral true if the user wants to user the deposit as
     * collateral, false otherwise.
     **/
    function setUserUseReserveAsCollateral(
        address _reserve,
        bool _useAsCollateral
    )
        external
        nonReentrant
        onlyActiveReserve(_reserve)
        onlyUnfreezedReserve(_reserve)
    {
        uint256 underlyingBalance =
            core.getUserUnderlyingAssetBalance(_reserve, msg.sender);

        require(
            underlyingBalance > 0,
            "User does not have any liquidity deposited"
        );

        require(
            dataProvider.balanceDecreaseAllowed(
                _reserve,
                msg.sender,
                underlyingBalance
            ),
            "User deposit is already being used as collateral"
        );

        core.setUserUseReserveAsCollateral(
            _reserve,
            msg.sender,
            _useAsCollateral
        );

        if (_useAsCollateral) {
            emit ReserveUsedAsCollateralEnabled(_reserve, msg.sender);
        } else {
            emit ReserveUsedAsCollateralDisabled(_reserve, msg.sender);
        }
    }

    /**
     * @dev users can invoke this function to liquidate an undercollateralized
     * position.
     * @param _collateral the address of the collateral to liquidated
     * @param _reserve the address of the principal reserve
     * @param _user the address of the borrower
     * @param _purchaseAmount the amount of principal that the liquidator wants
     * to repay
     * @param _receiveMToken true if the liquidators wants to receive the
     * mTokens, false if
     * he wants to receive the underlying asset directly
     **/
    function liquidationCall(
        address _collateral,
        address _reserve,
        address _user,
        uint256 _purchaseAmount,
        bool _receiveMToken
    )
        external
        payable
        nonReentrant
        onlyActiveReserve(_reserve)
        onlyActiveReserve(_collateral)
    {
        address liquidationManager =
            addressesProvider.getLendingPoolLiquidationManager();
        //solium-disable-next-line
        (bool success, bytes memory result) =
            liquidationManager.delegatecall(
                abi.encodeWithSignature(
                    "liquidationCall(address,address,address,uint256,bool)",
                    _collateral,
                    _reserve,
                    _user,
                    _purchaseAmount,
                    _receiveMToken
                )
            );

        require(success, "Liquidation call failed");

        (uint256 returnCode, string memory returnMessage) =
            abi.decode(result, (uint256, string));

        if (returnCode != 0) {
            //error found
            revert(
                string(abi.encodePacked("Liquidation failed: ", returnMessage))
            );
        }
    }

    /**
     * @dev allows smartcontracts to access the liquidity of the pool within one
     * transaction,
     * as long as the amount taken plus a fee is returned. NOTE There are
     * security concerns for developers of flashloan receiver contracts
     * that must be kept into consideration. For further details please visit
     * TODO: Multiplier Finance Documentation Link
     * @param _receiver The address of the contract receiving the funds. The
     * receiver should implement the IFlashLoanReceiver interface.
     * @param _reserve the address of the principal reserve
     * @param _amount the amount requested for this flashloan
     **/
    function flashLoan(
        address _receiver,
        address _reserve,
        uint256 _amount,
        bytes memory _params
    )
        public
        nonReentrant
        onlyActiveReserve(_reserve)
        onlyAmountGreaterThanZero(_amount)
    {
        //check that the reserve has enough available liquidity
        uint256 availableLiquidityBefore =
            _reserve == BscAddressLib.bnbAddress()
                ? address(core).balance
                : IERC20(_reserve).balanceOf(address(core));

        require(
            availableLiquidityBefore >= _amount,
            "There is not enough liquidity available to borrow"
        );

        //calculate amount fee
        uint256 protocolFeeRate = feeProvider.getFlashLoanFee();
        uint256 amountFee = _amount.wadMul(protocolFeeRate);
        require(
            amountFee > 0,
            "The requested amount is too small for a flashLoan."
        );

        //get the FlashLoanReceiver instance
        IFlashLoanReceiver receiver = IFlashLoanReceiver(_receiver);

        address payable userPayable = address(uint160(_receiver));

        //transfer funds to the receiver
        core.transferToUser(_reserve, userPayable, _amount);

        //execute action of the receiver
        receiver.executeOperation(_reserve, _amount, amountFee, _params);

        //check that the actual balance of the core contract includes the returned amount
        uint256 availableLiquidityAfter =
            _reserve == BscAddressLib.bnbAddress()
                ? address(core).balance
                : IERC20(_reserve).balanceOf(address(core));

        require(
            availableLiquidityAfter == availableLiquidityBefore.add(amountFee),
            "The actual balance of the protocol is inconsistent"
        );

        core.updateStateOnFlashLoan(_reserve);

        // Reward Manager : Add reward item
        addRewardItem(_reserve, amountFee);

        // At this point in time, the _amountFee is in the Core address.
        core.transferToFeeCollectionAddress(
            _reserve,
            address(core),
            amountFee,
            true
        );

        //solium-disable-next-line
        emit FlashLoan(_receiver, _reserve, _amount, block.timestamp);
    }

    /**
     * @dev accessory functions to fetch data from the core contract
     **/

    function getReserveConfigurationData(address _reserve)
        external
        view
        returns (
            uint256 ltv,
            uint256 liquidationThreshold,
            uint256 liquidationBonus,
            address interestRateStrategyAddress,
            bool usageAsCollateralEnabled,
            bool borrowingEnabled,
            bool stableBorrowRateEnabled,
            bool isActive
        )
    {
        return dataProvider.getReserveConfigurationData(_reserve);
    }

    function getReserveData(address _reserve)
        external
        view
        returns (
            uint256 totalLiquidity,
            uint256 availableLiquidity,
            uint256 totalBorrowsStable,
            uint256 totalBorrowsVariable,
            uint256 liquidityRate,
            uint256 variableBorrowRate,
            uint256 stableBorrowRate,
            uint256 averageStableBorrowRate,
            uint256 utilizationRate,
            uint256 liquidityIndex,
            uint256 variableBorrowIndex,
            address mTokenAddress,
            uint40 lastUpdateTimestamp
        )
    {
        return dataProvider.getReserveData(_reserve);
    }

    function getUserAccountData(address _user)
        external
        view
        returns (
            uint256 totalLiquidityBNB,
            uint256 totalCollateralBNB,
            uint256 totalBorrowsBNB,
            uint256 totalFeesBNB,
            uint256 availableBorrowsBNB,
            uint256 currentLiquidationThreshold,
            uint256 ltv,
            uint256 healthFactor
        )
    {
        return dataProvider.getUserAccountData(_user);
    }

    function getUserReserveData(address _reserve, address _user)
        external
        view
        returns (
            uint256 currentMTokenBalance,
            uint256 currentBorrowBalance,
            uint256 principalBorrowBalance,
            uint256 borrowRateMode,
            uint256 borrowRate,
            uint256 liquidityRate,
            uint256 originationFee,
            uint256 variableBorrowIndex,
            uint256 lastUpdateTimestamp,
            bool usageAsCollateralEnabled
        )
    {
        return dataProvider.getUserReserveData(_reserve, _user);
    }

    function getReserves() external view returns (address[] memory) {
        return core.getReserves();
    }

    /**
     * @dev internal function to save on code size for the onlyActiveReserve
     * modifier
     **/
    function requireReserveActiveInternal(address _reserve) internal view {
        require(
            core.getReserveIsActive(_reserve),
            "Action requires an active reserve"
        );
    }

    /**
     * @notice internal function to save on code size for the
     * onlyUnfreezedReserve modifier
     **/
    function requireReserveNotFreezedInternal(address _reserve) internal view {
        require(
            !core.getReserveIsFreezed(_reserve),
            "Action requires an unfreezed reserve"
        );
    }

    /**
     * @notice internal function to save on code size for the
     * onlyAmountGreaterThanZero modifier
     **/
    function requireAmountGreaterThanZeroInternal(uint256 _amount)
        internal
        pure
    {
        require(_amount > 0, "Amount must be greater than 0");
    }

    // Reward Manager
    // This need to be called before reward giving. If new reserve token is added, call this function again //

    function registerAllPoolsForReward() external {
        rewardsMgr = RewardsManager(addressesProvider.getRewardManager());
        rewardsMgr.registerPools(core.getReserves());
    }

    function readReward(address _reserve, RewardsManager.RewardTypes _type)
        external
        view
        returns (uint256)
    {
        uint256 share =
            _type == RewardsManager.RewardTypes.Depositor
                ? core.getUsermTokenBalance(_reserve, msg.sender)
                : core.getUserStakedTokenBalance(msg.sender);

        return rewardsMgr.readRewards(_reserve, msg.sender, _type, share);
    }

    function updateRewards(address _reserve, address _user) public {
        uint256 mTokenBalance = core.getUsermTokenBalance(_reserve, _user);
        uint256 stakedBalance = core.getUserStakedTokenBalance(_user);

        rewardsMgr.updateRewards(
            _reserve,
            _user,
            mTokenBalance,
            stakedBalance,
            0
        );
    }

    function updateGovernanceStakingRewards(address _user) external {
        uint256 stakedBalance = core.getUserStakedTokenBalance(_user);

        address[] memory reserves = core.getReserves();
        uint256 len = reserves.length;
        for (uint256 i = 0; i < len; i++) {
            rewardsMgr.updateReward(
                reserves[i],
                _user,
                RewardsManager.RewardTypes.Governance,
                stakedBalance,
                0
            );
        }
    }

    function updateLpReward(address _reserve, address _user) external {
        uint256 mTokenBalance = core.getUsermTokenBalance(_reserve, _user);
        rewardsMgr.updateReward(
            _reserve,
            _user,
            RewardsManager.RewardTypes.Depositor,
            mTokenBalance,
            0
        );
    }

    // In case a user has not claim for a very long time (exceed eVM max read/write), we can update it by batches //
    function updatePartialReward(
        address _reserve,
        address _user,
        RewardsManager.RewardTypes _type,
        uint256 num
    ) external {
        // Allow batch update only for Depositor and Governance rewards //
        if (_type == RewardsManager.RewardTypes.Safety) {
            return;
        }

        uint256 balance =
            _type == RewardsManager.RewardTypes.Depositor
                ? core.getUsermTokenBalance(_reserve, _user)
                : core.getUserStakedTokenBalance(_user);

        rewardsMgr.updateReward(_reserve, _user, _type, balance, num);
    }

    function addRewardItem(address _reserve, uint256 _amount) private {
        RewardLocalVars memory reward;
        (reward.suppliers, reward.governace, ) = feeProvider.calculateRewards(
            _amount
        );

        uint256 liquidity = core.getReserveAvailableLiquidity(_reserve);
        rewardsMgr.addRewardItem(
            _reserve,
            reward.suppliers,
            liquidity,
            reward.governace
        );
    }

    function claimReward(address _reserve, RewardsManager.RewardTypes _type)
        external
    {
        claimRewardInternal(_reserve, _type);
    }

    function claimAllReward(RewardsManager.RewardTypes _type) external {
        // Loop over all rewards and claims //
        address[] memory addresses = core.getReserves();
        uint256 len = addresses.length;
        for (uint256 i = 0; i < len; i++) {
            claimRewardInternal(addresses[i], _type);
        }
    }

    function claimRewardInternal(
        address _reserve,
        RewardsManager.RewardTypes _type
    ) internal {
        uint256 share =
            _type == RewardsManager.RewardTypes.Depositor
                ? core.getUsermTokenBalance(_reserve, msg.sender)
                : core.getUserStakedTokenBalance(msg.sender);

        uint256 amt =
            rewardsMgr.readRewards(_reserve, msg.sender, _type, share);

        if (amt != 0) {
            rewardsMgr.resetReward(_reserve, msg.sender, _type);
            rewardsMgr.withdrawFromVault(_type, _reserve, msg.sender, amt);

            //solium-disable-next-line
            emit ClaimReward(_reserve, msg.sender, amt, block.timestamp);
        }
    }
}
