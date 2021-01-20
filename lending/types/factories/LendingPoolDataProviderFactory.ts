/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LendingPoolDataProvider } from "../LendingPoolDataProvider";

export class LendingPoolDataProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LendingPoolDataProvider> {
    return super.deploy(overrides || {}) as Promise<LendingPoolDataProvider>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LendingPoolDataProvider {
    return super.attach(address) as LendingPoolDataProvider;
  }
  connect(signer: Signer): LendingPoolDataProviderFactory {
    return super.connect(signer) as LendingPoolDataProviderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LendingPoolDataProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LendingPoolDataProvider;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "DATA_PROVIDER_REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "addressesProvider",
    outputs: [
      {
        internalType: "contract LendingPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "balanceDecreaseAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userCurrentBorrowBalanceTH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userCurrentFeesBNB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userCurrentLtv",
        type: "uint256",
      },
    ],
    name: "calculateCollateralNeededInBNB",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "calculateUserGlobalData",
    outputs: [
      {
        internalType: "uint256",
        name: "totalLiquidityBalanceBNB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalCollateralBalanceBNB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBorrowBalanceBNB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalFeesBNB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentLtv",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentLiquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "healthFactor",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "healthFactorBelowThreshold",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "core",
    outputs: [
      {
        internalType: "contract LendingPoolCore",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getHealthFactorLiquidationThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
    ],
    name: "getReserveConfigurationData",
    outputs: [
      {
        internalType: "uint256",
        name: "ltv",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidationBonus",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rateStrategyAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "usageAsCollateralEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "borrowingEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "stableBorrowRateEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
    ],
    name: "getReserveData",
    outputs: [
      {
        internalType: "uint256",
        name: "totalLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBorrowsStable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBorrowsVariable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "averageStableBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "utilizationRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "bMXXTokenAddress",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "lastUpdateTimestamp",
        type: "uint40",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserAccountData",
    outputs: [
      {
        internalType: "uint256",
        name: "totalLiquidityBNB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalCollateralBNB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalBorrowsBNB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalFeesBNB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "availableBorrowsBNB",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentLiquidationThreshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ltv",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "healthFactor",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_reserve",
        type: "address",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getUserReserveData",
    outputs: [
      {
        internalType: "uint256",
        name: "currentmTokenBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentBorrowBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "principalBorrowBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRateMode",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "originationFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "variableBorrowIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastUpdateTimestamp",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "usageAsCollateralEnabled",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract LendingPoolAddressesProvider",
        name: "_addressesProvider",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b506129fa806100246000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638daf609f1161008c578063c4d66de811610066578063c4d66de8146103a8578063c72c4d10146103d0578063dd335c96146103f4578063f2f4eb2614610438576100cf565b80638daf609f14610331578063bf92857c14610339578063c3525c28146103a0576100cf565b806328dd2d01146100d45780632c6d0e9b1461015457806335ea6a75146101bd5780633e150141146102585780633e44bee8146102cd57806376e9d615146102e7575b600080fd5b610102600480360360408110156100ea57600080fd5b506001600160a01b0381358116916020013516610440565b604080519a8b5260208b0199909952898901979097526060890195909552608088019390935260a087019190915260c086015260e0850152610100840152151561012083015251908190036101400190f35b61017a6004803603602081101561016a57600080fd5b50356001600160a01b0316610c2b565b604080519889526020890197909752878701959095526060870193909352608086019190915260a085015260c0840152151560e083015251908190036101000190f35b6101e3600480360360208110156101d357600080fd5b50356001600160a01b03166111e1565b604080519d8e5260208e019c909c528c8c019a909a5260608c019890985260808b019690965260a08a019490945260c089019290925260e08801526101008701526101208601526101408501526001600160a01b031661016084015264ffffffffff1661018083015251908190036101a00190f35b61027e6004803603602081101561026e57600080fd5b50356001600160a01b0316611a88565b604080519889526020890197909752878701959095526001600160a01b0390931660608701529015156080860152151560a0850152151560c0840152151560e083015251908190036101000190f35b6102d5611dfb565b60408051918252519081900360200190f35b61031d600480360360608110156102fd57600080fd5b506001600160a01b03813581169160208101359091169060400135611e07565b604080519115158252519081900360200190f35b6102d561213a565b61035f6004803603602081101561034f57600080fd5b50356001600160a01b031661213f565b604080519889526020890197909752878701959095526060870193909352608086019190915260a085015260c084015260e083015251908190036101000190f35b6102d5612180565b6103ce600480360360208110156103be57600080fd5b50356001600160a01b031661218c565b005b6103d86122c8565b604080516001600160a01b039092168252519081900360200190f35b6102d5600480360360c081101561040a57600080fd5b506001600160a01b038135169060208101359060408101359060608101359060808101359060a001356122d7565b6103d8612486565b600080600080600080600080600080603460009054906101000a90046001600160a01b03166001600160a01b0316635c90bc858d6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156104ba57600080fd5b505afa1580156104ce573d6000803e3d6000fd5b505050506040513d60208110156104e457600080fd5b5051604080516370a0823160e01b81526001600160a01b038e81166004830152915191909216916370a08231916024808301926020929190829003018186803b15801561053057600080fd5b505afa158015610544573d6000803e3d6000fd5b505050506040513d602081101561055a57600080fd5b810190808051906020019092919050505099506000603460009054906101000a90046001600160a01b03166001600160a01b0316631ca19f198e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b1580156105f457600080fd5b505afa158015610608573d6000803e3d6000fd5b505050506040513d602081101561061e57600080fd5b81019080805190602001909291905050509050603460009054906101000a90046001600160a01b03166001600160a01b0316639fb8afcd8e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060606040518083038186803b1580156106b657600080fd5b505afa1580156106ca573d6000803e3d6000fd5b505050506040513d60608110156106e057600080fd5b5080516020909101519a50985060018160028111156106fb57fe5b14156107b957603460009054906101000a90046001600160a01b03166001600160a01b0316636fffab0c8e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b15801561078657600080fd5b505afa15801561079a573d6000803e3d6000fd5b505050506040513d60208110156107b057600080fd5b50519650610867565b60028160028111156107c757fe5b141561086757603460009054906101000a90046001600160a01b03166001600160a01b031663906c0a418e6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561083857600080fd5b505afa15801561084c573d6000803e3d6000fd5b505050506040513d602081101561086257600080fd5b505196505b80600281111561087357fe5b9750603460009054906101000a90046001600160a01b03166001600160a01b031663c540148e8e6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156108e057600080fd5b505afa1580156108f4573d6000803e3d6000fd5b505050506040513d602081101561090a57600080fd5b81019080805190602001909291905050509550603460009054906101000a90046001600160a01b03166001600160a01b031663feab31ac8e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b1580156109a257600080fd5b505afa1580156109b6573d6000803e3d6000fd5b505050506040513d60208110156109cc57600080fd5b81019080805190602001909291905050509450603460009054906101000a90046001600160a01b03166001600160a01b031663f6ea8d768e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b158015610a6457600080fd5b505afa158015610a78573d6000803e3d6000fd5b505050506040513d6020811015610a8e57600080fd5b81019080805190602001909291905050509350603460009054906101000a90046001600160a01b03166001600160a01b03166366d103f38e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b158015610b2657600080fd5b505afa158015610b3a573d6000803e3d6000fd5b505050506040513d6020811015610b5057600080fd5b81019080805190602001909291905050509250603460009054906101000a90046001600160a01b03166001600160a01b0316639e3c4f3b8e8e6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b158015610be857600080fd5b505afa158015610bfc573d6000803e3d6000fd5b505050506040513d6020811015610c1257600080fd5b50519a9d999c50979a5095989497939650919450929091565b6000806000806000806000806000603560009054906101000a90046001600160a01b03166001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b158015610c8757600080fd5b505afa158015610c9b573d6000803e3d6000fd5b505050506040513d6020811015610cb157600080fd5b50519050610cbd6128b3565b60345460408051630240bc6b60e21b815290516060926001600160a01b031691630902f1ac916004808301926000929190829003018186803b158015610d0257600080fd5b505afa158015610d16573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610d3f57600080fd5b8101908080516040519392919084640100000000821115610d5f57600080fd5b908301906020820185811115610d7457600080fd5b8251866020820283011164010000000082111715610d9157600080fd5b82525081516020918201928201910280838360005b83811015610dbe578181015183820152602001610da6565b50505050905001604052505050905060008090505b815181101561117557818181518110610de857fe5b60200260200101518361014001906001600160a01b031690816001600160a01b031681525050603460009054906101000a90046001600160a01b03166001600160a01b031663e10076ad8461014001518f6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b03168152602001826001600160a01b03166001600160a01b031681526020019250505060806040518083038186803b158015610e9857600080fd5b505afa158015610eac573d6000803e3d6000fd5b505050506040513d6080811015610ec257600080fd5b5080516020820151604080840151606094850151151561012089015260e088015292860152908401819052158015610efc57506060830151155b15610f065761116d565b60345461014084015160408051635fc526ff60e01b81526001600160a01b03928316600482015290519190921691635fc526ff916024808301926080929190829003018186803b158015610f5957600080fd5b505afa158015610f6d573d6000803e3d6000fd5b505050506040513d6080811015610f8357600080fd5b508051602080830151604080850151606090950151151561010089015260c088019490945260a087015260808601829052600a9190910a85820152610140850151825163b3596f0760e01b81526001600160a01b03918216600482015292519087169263b3596f07926024808301939192829003018186803b15801561100857600080fd5b505afa15801561101c573d6000803e3d6000fd5b505050506040513d602081101561103257600080fd5b5051835260408301511561110557600061107184602001516110658660400151876000015161249590919063ffffffff16565b9063ffffffff6124f716565b90506110838d8263ffffffff61253916565b9c50836101000151801561109957508361012001515b15611103576110ae8c8263ffffffff61253916565b9b506110d76110ca8560a001518361249590919063ffffffff16565b8a9063ffffffff61253916565b98506111006110f38560c001518361249590919063ffffffff16565b899063ffffffff61253916565b97505b505b60608301511561116d5761114261113584602001516110658660600151876000015161249590919063ffffffff16565b8b9063ffffffff61253916565b995061116a6110ca846020015161106586600001518760e0015161249590919063ffffffff16565b98505b600101610dd3565b5060008a11611185576000611195565b611195878b63ffffffff6124f716565b965060008a116111a65760006111b6565b6111b6868b63ffffffff6124f716565b95506111c48a8a8a89612593565b9450670de0b6b3a764000085109350505050919395975091939597565b6000806000806000806000806000806000806000603460009054906101000a90046001600160a01b03166001600160a01b031663c33cfd908f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561126057600080fd5b505afa158015611274573d6000803e3d6000fd5b505050506040513d602081101561128a57600080fd5b81019080805190602001909291905050509c50603460009054906101000a90046001600160a01b03166001600160a01b031663e24030198f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561130857600080fd5b505afa15801561131c573d6000803e3d6000fd5b505050506040513d602081101561133257600080fd5b81019080805190602001909291905050509b50603460009054906101000a90046001600160a01b03166001600160a01b0316637f90fec58f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156113b057600080fd5b505afa1580156113c4573d6000803e3d6000fd5b505050506040513d60208110156113da57600080fd5b81019080805190602001909291905050509a50603460009054906101000a90046001600160a01b03166001600160a01b03166398bd47378f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561145857600080fd5b505afa15801561146c573d6000803e3d6000fd5b505050506040513d602081101561148257600080fd5b81019080805190602001909291905050509950603460009054906101000a90046001600160a01b03166001600160a01b031663c540148e8f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561150057600080fd5b505afa158015611514573d6000803e3d6000fd5b505050506040513d602081101561152a57600080fd5b81019080805190602001909291905050509850603460009054906101000a90046001600160a01b03166001600160a01b031663906c0a418f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156115a857600080fd5b505afa1580156115bc573d6000803e3d6000fd5b505050506040513d60208110156115d257600080fd5b81019080805190602001909291905050509750603460009054906101000a90046001600160a01b03166001600160a01b03166388079d888f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561165057600080fd5b505afa158015611664573d6000803e3d6000fd5b505050506040513d602081101561167a57600080fd5b81019080805190602001909291905050509650603460009054906101000a90046001600160a01b03166001600160a01b03166346bc0f288f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156116f857600080fd5b505afa15801561170c573d6000803e3d6000fd5b505050506040513d602081101561172257600080fd5b81019080805190602001909291905050509550603460009054906101000a90046001600160a01b03166001600160a01b031663bfacad848f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156117a057600080fd5b505afa1580156117b4573d6000803e3d6000fd5b505050506040513d60208110156117ca57600080fd5b81019080805190602001909291905050509450603460009054906101000a90046001600160a01b03166001600160a01b031663bd7fd79a8f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561184857600080fd5b505afa15801561185c573d6000803e3d6000fd5b505050506040513d602081101561187257600080fd5b81019080805190602001909291905050509350603460009054906101000a90046001600160a01b03166001600160a01b031663b701d0938f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156118f057600080fd5b505afa158015611904573d6000803e3d6000fd5b505050506040513d602081101561191a57600080fd5b81019080805190602001909291905050509250603460009054906101000a90046001600160a01b03166001600160a01b0316635c90bc858f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561199857600080fd5b505afa1580156119ac573d6000803e3d6000fd5b505050506040513d60208110156119c257600080fd5b81019080805190602001909291905050509150603460009054906101000a90046001600160a01b03166001600160a01b0316634f1446098f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015611a4057600080fd5b505afa158015611a54573d6000803e3d6000fd5b505050506040513d6020811015611a6a57600080fd5b50519c9e9b9d50999b989a9799509597949693959294919390929190565b600080600080600080600080603460009054906101000a90046001600160a01b03166001600160a01b0316635fc526ff8a6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060806040518083038186803b158015611aff57600080fd5b505afa158015611b13573d6000803e3d6000fd5b505050506040513d6080811015611b2957600080fd5b810190808051906020019092919080519060200190929190805190602001909291908051906020019092919050505090919250809650819950829a50505050603460009054906101000a90046001600160a01b03166001600160a01b0316639e6748488a6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015611bd357600080fd5b505afa158015611be7573d6000803e3d6000fd5b505050506040513d6020811015611bfd57600080fd5b505160345460408051632e79732b60e11b81526001600160a01b038d811660048301529151939550911691635cf2e65691602480820192602092909190829003018186803b158015611c4e57600080fd5b505afa158015611c62573d6000803e3d6000fd5b505050506040513d6020811015611c7857600080fd5b505160345460408051630283aeb760e11b81526001600160a01b038d8116600483015291519396509116916305075d6e91602480820192602092909190829003018186803b158015611cc957600080fd5b505afa158015611cdd573d6000803e3d6000fd5b505050506040513d6020811015611cf357600080fd5b5051603454604080516331da9b2760e21b81526001600160a01b038d81166004830152915193945091169163c76a6c9c91602480820192602092909190829003018186803b158015611d4457600080fd5b505afa158015611d58573d6000803e3d6000fd5b505050506040513d6020811015611d6e57600080fd5b505160345460408051633570a20b60e11b81526001600160a01b038d811660048301529151939950911691636ae1441691602480820192602092909190829003018186803b158015611dbf57600080fd5b505afa158015611dd3573d6000803e3d6000fd5b505050506040513d6020811015611de957600080fd5b50519799969850949695929491935091565b670de0b6b3a764000090565b6000611e1161291a565b60345460408051635fc526ff60e01b81526001600160a01b03888116600483015291519190921691635fc526ff916024808301926080929190829003018186803b158015611e5e57600080fd5b505afa158015611e72573d6000803e3d6000fd5b505050506040513d6080811015611e8857600080fd5b508051604082015160609092015115801561014085015260a0840192909252825280611f32575060345460408051639e3c4f3b60e01b81526001600160a01b038881166004830152878116602483015291519190921691639e3c4f3b916044808301926020929190829003018186803b158015611f0457600080fd5b505afa158015611f18573d6000803e3d6000fd5b505050506040513d6020811015611f2e57600080fd5b5051155b15611f41576001915050612133565b611f4a84610c2b565b5050608087015250606085015260408401819052602084019190915215159050611f78576001915050612133565b60355460408051631f94a27560e31b815290516000926001600160a01b03169163fca513a8916004808301926020929190829003018186803b158015611fbd57600080fd5b505afa158015611fd1573d6000803e3d6000fd5b505050506040513d6020811015611fe757600080fd5b505182516040805163b3596f0760e01b81526001600160a01b038a81166004830152915193945061208193600a9390930a926110659289929087169163b3596f0791602480820192602092909190829003018186803b15801561204957600080fd5b505afa15801561205d573d6000803e3d6000fd5b505050506040513d602081101561207357600080fd5b50519063ffffffff61249516565b60c08301819052602083015161209c9163ffffffff6125e216565b60e083018190526120b257600092505050612133565b6120fd8260e001516110656120d88560a001518660c0015161249590919063ffffffff16565b608086015160208701516120f19163ffffffff61249516565b9063ffffffff6125e216565b610100830181905260e08301516040840151606085015160009361212393929190612593565b670de0b6b3a76400001093505050505b9392505050565b600181565b60008060008060008060008061215489610c2b565b50959d50939b5091995097509094509250905061217387878785612624565b9350919395975091939597565b670de0b6b3a764000081565b6000612196612780565b60015490915060ff16806121ad57506121ad612785565b806121b9575060005481115b6121f45760405162461bcd60e51b815260040180806020018281038252602e815260200180612998602e913960400191505060405180910390fd5b60015460ff16158015612213576001805460ff19168117905560008290555b603580546001600160a01b0319166001600160a01b0385169081179091556040805163076b7fbb60e51b8152905163ed6ff76091600480820192602092909190829003018186803b15801561226757600080fd5b505afa15801561227b573d6000803e3d6000fd5b505050506040513d602081101561229157600080fd5b5051603480546001600160a01b0319166001600160a01b0390921691909117905580156122c3576001805460ff191690555b505050565b6035546001600160a01b031681565b6034546040805163288d4ff760e21b81526001600160a01b03898116600483015291516000938493169163a2353fdc916024808301926020929190829003018186803b15801561232657600080fd5b505afa15801561233a573d6000803e3d6000fd5b505050506040513d602081101561235057600080fd5b505160355460408051631f94a27560e31b815290519293506000926001600160a01b039092169163fca513a891600480820192602092909190829003018186803b15801561239d57600080fd5b505afa1580156123b1573d6000803e3d6000fd5b505050506040513d60208110156123c757600080fd5b50519050600061243e600a84900a6110656123e88c8c63ffffffff61253916565b856001600160a01b031663b3596f078f6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561204957600080fd5b9050600061247786611065606461246b8661245f8e8e63ffffffff61253916565b9063ffffffff61253916565b9063ffffffff61249516565b9b9a5050505050505050505050565b6034546001600160a01b031681565b6000826124a4575060006124f1565b828202828482816124b157fe5b04146124ee5760405162461bcd60e51b81526004018080602001828103825260218152602001806129776021913960400191505060405180910390fd5b90505b92915050565b60006124ee83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061278b565b6000828201838110156124ee576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000836125a357506000196125da565b6125d76125b6858563ffffffff61253916565b6125cb6064611065898763ffffffff61249516565b9063ffffffff61282d16565b90505b949350505050565b60006124ee83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612859565b60008061263c6064611065888663ffffffff61249516565b9050848110156126505760009150506125da565b612670612663868663ffffffff61253916565b829063ffffffff6125e216565b90506000603560009054906101000a90046001600160a01b03166001600160a01b031663fbeefc3c6040518163ffffffff1660e01b815260040160206040518083038186803b1580156126c257600080fd5b505afa1580156126d6573d6000803e3d6000fd5b505050506040513d60208110156126ec57600080fd5b50516040805163249bbe9160e01b81526004810185905290516001600160a01b039092169163249bbe9191602480820192602092909190829003018186803b15801561273757600080fd5b505afa15801561274b573d6000803e3d6000fd5b505050506040513d602081101561276157600080fd5b50519050612775828263ffffffff6125e216565b979650505050505050565b600190565b303b1590565b600081836128175760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156127dc5781810151838201526020016127c4565b50505050905090810190601f1680156128095780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161282357fe5b0495945050505050565b6000600282046125da8361106561284c87670de0b6b3a7640000612495565b849063ffffffff61253916565b600081848411156128ab5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156127dc5781810151838201526020016127c4565b505050900390565b604051806101600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160001515815260200160006001600160a01b031681525090565b60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564a265627a7a72315820ff7d272637e737fa918f801355e5cf0ac0e9cf06b293b69b5a028da1dbc5807c64736f6c63430005110032";
