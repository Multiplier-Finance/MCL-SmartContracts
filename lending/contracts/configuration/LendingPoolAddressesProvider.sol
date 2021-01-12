pragma solidity ^0.5.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.4.0/contracts/ownership/Ownable.sol";
import "../libraries/openzeppelin-upgradeability/InitializableAdminUpgradeabilityProxy.sol";
import "./AddressStorage.sol";
import "../interfaces/ILendingPoolAddressesProvider.sol";

/**
 * @title LendingPoolAddressesProvider contract
 * @notice Is the main registry of the protocol. All the different components of * the protocol are accessible
 * through the addresses provider.
 * @author Multiplier Finance
 **/

contract LendingPoolAddressesProvider is
    Ownable,
    ILendingPoolAddressesProvider,
    AddressStorage
{
    // Events to be emitted
    event LendingPoolUpdated(address indexed newAddress);
    event LendingPoolCoreUpdated(address indexed newAddress);
    event LendingPoolParametersProviderUpdated(address indexed newAddress);
    event LendingPoolManagerUpdated(address indexed newAddress);
    event LendingPoolConfiguratorUpdated(address indexed newAddress);
    event LendingPoolLiquidationManagerUpdated(address indexed newAddress);
    event LendingPoolDataProviderUpdated(address indexed newAddress);
    event PriceOracleUpdated(address indexed newAddress);
    event LendingRateOracleUpdated(address indexed newAddress);
    event FeeProviderUpdated(address indexed newAddress);
    event RewardManagerUpdated(address indexed newAddress);
    event LiquidityRewardVaultUpdated(address indexed newAddress);
    event GovRewardVaultUpdated(address indexed newAddress);
    event SafetyRewardVaultUpdated(address indexed newAddress);
    event StakingTokenUpdated(address indexed newAddress);

    event ProxyCreated(bytes32 id, address indexed newAddress);

    bytes32 private constant LENDING_POOL = "LENDING_POOL";
    bytes32 private constant LENDING_POOL_CORE = "LENDING_POOL_CORE";
    bytes32
        private constant LENDING_POOL_CONFIGURATOR = "LENDING_POOL_CONFIGURATOR";
    bytes32
        private constant LENDING_POOL_PARAMETERS_PROVIDER = "PARAMETERS_PROVIDER";
    bytes32 private constant LENDING_POOL_MANAGER = "LENDING_POOL_MANAGER";
    bytes32
        private constant LENDING_POOL_LIQUIDATION_MANAGER = "LIQUIDATION_MANAGER";
    bytes32 private constant DATA_PROVIDER = "DATA_PROVIDER";
    bytes32 private constant PRICE_ORACLE = "PRICE_ORACLE";
    bytes32 private constant LENDING_RATE_ORACLE = "LENDING_RATE_ORACLE";
    bytes32 private constant FEE_PROVIDER = "FEE_PROVIDER";
    bytes32 private constant REWARD_MANAGER = "REWARD_MANAGER";
    bytes32 private constant LP_REWARD_VAULT = "LP_REWARD_VAULT";
    bytes32 private constant GOV_REWARD_VAULT = "GOV_REWARD_VAULT";
    bytes32 private constant SAFETY_REWARD_VAULT = "SAFETY_REWARD_VAULT";
    bytes32 private constant STAKING_TOKEN = "STAKING_TOKEN";

    /**
     * @dev returns the address of the LendingPool proxy
     * @return the lending pool proxy address
     **/
    function getLendingPool() public view returns (address) {
        return getAddress(LENDING_POOL);
    }

    /**
     * @dev updates the implementation of the lending pool
     * @param _pool the new lending pool implementation
     **/
    function setLendingPoolImpl(address _pool) public onlyOwner {
        updateImplInternal(LENDING_POOL, _pool);
        emit LendingPoolUpdated(_pool);
    }

    /**
     * @dev returns the address of the LendingPoolCore proxy
     * @return the lending pool core proxy address
     */
    function getLendingPoolCore() public view returns (address payable) {
        address payable core = address(uint160(getAddress(LENDING_POOL_CORE)));
        return core;
    }

    /**
     * @dev updates the implementation of the lending pool core
     * @param _lendingPoolCore the new lending pool core implementation
     **/
    function setLendingPoolCoreImpl(address _lendingPoolCore) public onlyOwner {
        updateImplInternal(LENDING_POOL_CORE, _lendingPoolCore);
        emit LendingPoolCoreUpdated(_lendingPoolCore);
    }

    /**
     * @dev returns the address of the LendingPoolConfigurator proxy
     * @return the lending pool configurator proxy address
     **/
    function getLendingPoolConfigurator() public view returns (address) {
        return getAddress(LENDING_POOL_CONFIGURATOR);
    }

    /**
     * @dev updates the implementation of the lending pool configurator
     * @param _configurator the new lending pool configurator implementation
     **/
    function setLendingPoolConfiguratorImpl(address _configurator)
        public
        onlyOwner
    {
        updateImplInternal(LENDING_POOL_CONFIGURATOR, _configurator);
        emit LendingPoolConfiguratorUpdated(_configurator);
    }

    /**
     * @dev returns the address of the LendingPoolDataProvider proxy
     * @return the lending pool data provider proxy address
     */
    function getLendingPoolDataProvider() public view returns (address) {
        return getAddress(DATA_PROVIDER);
    }

    /**
     * @dev updates the implementation of the lending pool data provider
     * @param _provider the new lending pool data provider implementation
     **/
    function setLendingPoolDataProviderImpl(address _provider)
        public
        onlyOwner
    {
        updateImplInternal(DATA_PROVIDER, _provider);
        emit LendingPoolDataProviderUpdated(_provider);
    }

    /**
     * @dev returns the address of the LendingPoolParametersProvider proxy
     * @return the address of the Lending pool parameters provider proxy
     **/
    function getLendingPoolParametersProvider() public view returns (address) {
        return getAddress(LENDING_POOL_PARAMETERS_PROVIDER);
    }

    /**
     * @dev updates the implementation of the lending pool parameters provider
     * @param _parametersProvider the new lending pool parameters provider implementation
     **/
    function setLendingPoolParametersProvider(address _parametersProvider)
        public
        onlyOwner
    {
        _setAddress(LENDING_POOL_PARAMETERS_PROVIDER, _parametersProvider);
        emit LendingPoolParametersProviderUpdated(_parametersProvider);
    }

    /**
     * @dev returns the address of the FeeProvider proxy
     * @return the address of the Fee provider proxy
     **/
    function getFeeProvider() public view returns (address) {
        return getAddress(FEE_PROVIDER);
    }

    /**
     * @dev updates the implementation of the FeeProvider proxy
     * @param _feeProvider the new lending pool fee provider implementation
     **/
    function setFeeProviderImpl(address _feeProvider) public onlyOwner {
        updateImplInternal(FEE_PROVIDER, _feeProvider);
        emit FeeProviderUpdated(_feeProvider);
    }

    /**
     * @dev returns the address of the LendingPoolLiquidationManager. Since the
     * manager is used
     * through delegateCall within the LendingPool contract, the proxy contract
     * pattern does not work properly hence
     * the addresses are changed directly.
     * @return the address of the Lending pool liquidation manager
     **/

    function getLendingPoolLiquidationManager() public view returns (address) {
        return getAddress(LENDING_POOL_LIQUIDATION_MANAGER);
    }

    /**
     * @dev updates the address of the Lending pool liquidation manager
     * @param _manager the new lending pool liquidation manager address
     **/
    function setLendingPoolLiquidationManager(address _manager)
        public
        onlyOwner
    {
        _setAddress(LENDING_POOL_LIQUIDATION_MANAGER, _manager);
        emit LendingPoolLiquidationManagerUpdated(_manager);
    }

    /**
     * @dev the functions below are storing specific addresses that are outside
     * the context of the protocol
     * hence the upgradable proxy pattern is not used
     **/

    function getLendingPoolManager() public view returns (address) {
        return getAddress(LENDING_POOL_MANAGER);
    }

    function setLendingPoolManager(address _lendingPoolManager)
        public
        onlyOwner
    {
        _setAddress(LENDING_POOL_MANAGER, _lendingPoolManager);
        emit LendingPoolManagerUpdated(_lendingPoolManager);
    }

    function getPriceOracle() public view returns (address) {
        return getAddress(PRICE_ORACLE);
    }

    function setPriceOracle(address _priceOracle) public onlyOwner {
        _setAddress(PRICE_ORACLE, _priceOracle);
        emit PriceOracleUpdated(_priceOracle);
    }

    function getLendingRateOracle() public view returns (address) {
        return getAddress(LENDING_RATE_ORACLE);
    }

    function setLendingRateOracle(address _lendingRateOracle) public onlyOwner {
        _setAddress(LENDING_RATE_ORACLE, _lendingRateOracle);
        emit LendingRateOracleUpdated(_lendingRateOracle);
    }

    function getRewardManager() public view returns (address) {
        return getAddress(REWARD_MANAGER);
    }

    function setRewardManager(address _manager) public onlyOwner {
        _setAddress(REWARD_MANAGER, _manager);
        emit RewardManagerUpdated(_manager);
    }

    function getLpRewardVault() public view returns (address) {
        return getAddress(LP_REWARD_VAULT);
    }

    function setLpRewardVault(address _address) public onlyOwner {
        _setAddress(LP_REWARD_VAULT, _address);
        emit LiquidityRewardVaultUpdated(_address);
    }

    function getGovRewardVault() public view returns (address) {
        return getAddress(GOV_REWARD_VAULT);
    }

    function setGovRewardVault(address _address) public onlyOwner {
        _setAddress(GOV_REWARD_VAULT, _address);
        emit GovRewardVaultUpdated(_address);
    }

    function getSafetyRewardVault() public view returns (address) {
        return getAddress(SAFETY_REWARD_VAULT);
    }

    function setSafetyRewardVault(address _address) public onlyOwner {
        _setAddress(SAFETY_REWARD_VAULT, _address);
        emit SafetyRewardVaultUpdated(_address);
    }

    function getStakingToken() public view returns (address) {
        return getAddress(STAKING_TOKEN);
    }

    function setStakingToken(address _address) public onlyOwner {
        _setAddress(STAKING_TOKEN, _address);
        emit StakingTokenUpdated(_address);
    }

    /**
     * @dev internal function to update the implementation of a specific component of the protocol
     * @param _id the id of the contract to be updated
     * @param _newAddress the address of the new implementation
     **/
    function updateImplInternal(bytes32 _id, address _newAddress) internal {
        address payable proxyAddress = address(uint160(getAddress(_id)));


            InitializableAdminUpgradeabilityProxy proxy
         = InitializableAdminUpgradeabilityProxy(proxyAddress);
        bytes memory params = abi.encodeWithSignature(
            "initialize(address)",
            address(this)
        );

        if (proxyAddress == address(0)) {
            proxy = new InitializableAdminUpgradeabilityProxy();
            proxy.initialize(_newAddress, address(this), params);
            _setAddress(_id, address(proxy));
            emit ProxyCreated(_id, address(proxy));
        } else {
            proxy.upgradeToAndCall(_newAddress, params);
        }
    }
}