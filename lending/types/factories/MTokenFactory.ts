/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MToken } from "../MToken";

export class MTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _addressesProvider: string,
    _underlyingAsset: string,
    _underlyingAssetDecimals: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<MToken> {
    return super.deploy(
      _addressesProvider,
      _underlyingAsset,
      _underlyingAssetDecimals,
      _name,
      _symbol,
      overrides || {}
    ) as Promise<MToken>;
  }
  getDeployTransaction(
    _addressesProvider: string,
    _underlyingAsset: string,
    _underlyingAssetDecimals: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _addressesProvider,
      _underlyingAsset,
      _underlyingAssetDecimals,
      _name,
      _symbol,
      overrides || {}
    );
  }
  attach(address: string): MToken {
    return super.attach(address) as MToken;
  }
  connect(signer: Signer): MTokenFactory {
    return super.connect(signer) as MTokenFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MToken {
    return new Contract(address, _abi, signerOrProvider) as MToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract LendingPoolAddressesProvider",
        name: "_addressesProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_underlyingAssetDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toIndex",
        type: "uint256",
      },
    ],
    name: "BalanceTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256",
      },
    ],
    name: "BurnOnLiquidation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "InterestRedirectionAllowanceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_redirectedBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256",
      },
    ],
    name: "InterestStreamRedirected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256",
      },
    ],
    name: "MintOnDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromIndex",
        type: "uint256",
      },
    ],
    name: "Redeem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_targetAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_targetBalanceIncrease",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_targetIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_redirectedBalanceAdded",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_redirectedBalanceRemoved",
        type: "uint256",
      },
    ],
    name: "RedirectedBalanceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "UINT_MAX_VALUE",
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
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "allowInterestRedirectionTo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
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
    name: "balanceOf",
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
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "burnOnLiquidation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
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
    name: "getInterestRedirectionAddress",
    outputs: [
      {
        internalType: "address",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "getRedirectedBalance",
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
    name: "getUserIndex",
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
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
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
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "isTransferAllowed",
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
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintOnDeposit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "principalBalanceOf",
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
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "redirectInterestStream",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "redirectInterestStreamOf",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
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
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferOnLiquidation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "underlyingAssetAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026ca380380620026ca833981810160405260a08110156200003757600080fd5b8151602083015160408085015160608601805192519496939591949391820192846401000000008211156200006b57600080fd5b9083019060208201858111156200008157600080fd5b82516401000000008111828201881017156200009c57600080fd5b82525081516020918201929091019080838360005b83811015620000cb578181015183820152602001620000b1565b50505050905090810190601f168015620000f95780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011d57600080fd5b9083019060208201858111156200013357600080fd5b82516401000000008111828201881017156200014e57600080fd5b82525081516020918201929091019080838360005b838110156200017d57818101518382015260200162000163565b50505050905090810190601f168015620001ab5780820380516001836020036101000a031916815260200191505b506040525050508181848260039080519060200190620001cd929190620003da565b508151620001e3906004906020850190620003da565b506005805460ff191660ff929092169190911790555050600a80546001600160a01b0319166001600160a01b0387811691909117918290556040805163076b7fbb60e51b81529051929091169163ed6ff76091600480820192602092909190829003018186803b1580156200025757600080fd5b505afa1580156200026c573d6000803e3d6000fd5b505050506040513d60208110156200028357600080fd5b5051600b80546001600160a01b0319166001600160a01b03928316179055600a5460408051630261bf8b60e01b815290519190921691630261bf8b916004808301926020929190829003018186803b158015620002df57600080fd5b505afa158015620002f4573d6000803e3d6000fd5b505050506040513d60208110156200030b57600080fd5b5051600c80546001600160a01b0319166001600160a01b03928316179055600a5460408051632f58b80d60e01b815290519190921691632f58b80d916004808301926020929190829003018186803b1580156200036757600080fd5b505afa1580156200037c573d6000803e3d6000fd5b505050506040513d60208110156200039357600080fd5b5051600d80546001600160a01b0319166001600160a01b0392831617905560058054610100600160a81b031916610100969092169590950217909355506200047f92505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200041d57805160ff19168380011785556200044d565b828001600101855582156200044d579182015b828111156200044d57825182559160200191906001019062000430565b506200045b9291506200045f565b5090565b6200047c91905b808211156200045b576000815560010162000466565b90565b61223b806200048f6000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80635eae177c116100de578063a9059cbb11610097578063db006a7511610071578063db006a75146104f3578063dd62ed3e14610510578063ee9907a41461053e578063f866c3191461056457610173565b8063a9059cbb14610499578063c634dfaa146104c5578063d0fc81d2146104eb57610173565b80635eae177c146103df57806370a082311461040b57806389d1a0fc1461043157806394362e8b1461043957806395d89b4114610465578063a457c2d71461046d57610173565b806323b872dd1161013057806323b872dd146102c3578063313ce567146102f9578063325a9b131461031757806339509351146103455780633edb7cb814610371578063445e80101461039d57610173565b806306fdde0314610178578063095ea7b3146101f55780630e49072d1461023557806312c87c2d1461025d57806318160ddd146102835780631d51e7cf1461029d575b600080fd5b61018061059a565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ba5781810151838201526020016101a2565b50505050905090810190601f1680156101e75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102216004803603604081101561020b57600080fd5b506001600160a01b038135169060200135610631565b604080519115158252519081900360200190f35b61025b6004803603602081101561024b57600080fd5b50356001600160a01b031661064f565b005b61025b6004803603602081101561027357600080fd5b50356001600160a01b031661065c565b61028b6106fb565b60408051918252519081900360200190f35b61028b600480360360208110156102b357600080fd5b50356001600160a01b03166107bd565b610221600480360360608110156102d957600080fd5b506001600160a01b038135811691602081013590911690604001356107dc565b610301610869565b6040805160ff9092168252519081900360200190f35b61025b6004803603604081101561032d57600080fd5b506001600160a01b0381358116916020013516610872565b6102216004803603604081101561035b57600080fd5b506001600160a01b0381351690602001356108d8565b61025b6004803603604081101561038757600080fd5b506001600160a01b03813516906020013561092c565b6103c3600480360360208110156103b357600080fd5b50356001600160a01b0316610a2a565b604080516001600160a01b039092168252519081900360200190f35b610221600480360360408110156103f557600080fd5b506001600160a01b038135169060200135610a48565b61028b6004803603602081101561042157600080fd5b50356001600160a01b0316610ae3565b6103c3610b96565b61025b6004803603604081101561044f57600080fd5b506001600160a01b038135169060200135610baa565b610180610c88565b6102216004803603604081101561048357600080fd5b506001600160a01b038135169060200135610ce9565b610221600480360360408110156104af57600080fd5b506001600160a01b038135169060200135610d57565b61028b600480360360208110156104db57600080fd5b50356001600160a01b0316610d6b565b61028b610d76565b61025b6004803603602081101561050957600080fd5b5035610d7c565b61028b6004803603604081101561052657600080fd5b506001600160a01b0381358116916020013516610fbf565b61028b6004803603602081101561055457600080fd5b50356001600160a01b0316610fea565b61025b6004803603606081101561057a57600080fd5b506001600160a01b03813581169160208101359091169060400135611005565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106265780601f106105fb57610100808354040283529160200191610626565b820191906000526020600020905b81548152906001019060200180831161060957829003601f168201915b505050505090505b90565b600061064561063e61105e565b8484611062565b5060015b92915050565b610659338261114e565b50565b6001600160a01b0381163314156106a45760405162461bcd60e51b81526004018080602001828103825260258152602001806120026025913960400191505060405180910390fd5b3360008181526009602052604080822080546001600160a01b0319166001600160a01b03861690811790915590519092917fc2d6a42a9d5273283f73009a07aacfb043f2f91173a8d9d33b504afe898db08b91a350565b60008061070661133d565b90508061071757600091505061062e565b600b546005546040805163d15e005360e01b81526001600160a01b036101009093048316600482015290516107b7936107b293169163d15e0053916024808301926020929190829003018186803b15801561077157600080fd5b505afa158015610785573d6000803e3d6000fd5b505050506040513d602081101561079b57600080fd5b50516107a684611343565b9063ffffffff61135916565b6113a4565b91505090565b6001600160a01b0381166000908152600860205260409020545b919050565b60006107e98484846113bd565b61085f846107f561105e565b61085a85604051806060016040528060288152602001612048602891396001600160a01b038a1660009081526001602052604081209061083361105e565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61142c16565b611062565b5060019392505050565b60055460ff1690565b6001600160a01b038281166000908152600960205260409020541633146108ca5760405162461bcd60e51b815260040180806020018281038252603a8152602001806121cd603a913960400191505060405180910390fd5b6108d4828261114e565b5050565b60006106456108e561105e565b8461085a85600160006108f661105e565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff6114c316565b600c546001600160a01b031633146109755760405162461bcd60e51b81526004018080602001828103825260328152602001806121766032913960400191505060405180910390fd5b60008060006109838561151d565b93509350935050610995858386611614565b61099e8561174b565b6109a885856117bd565b60006109ba848663ffffffff6118b916565b6109ca576109c7866118fb565b90505b856001600160a01b03167f90e5d3d68ec162d9c7de393037a3ede04dd44f68e051bf2ace4a73c299dbc4db868584610a025785610a05565b60005b60408051938452602084019290925282820152519081900360600190a2505050505050565b6001600160a01b039081166000908152600760205260409020541690565b600d54600554604080516376e9d61560e01b81526101009092046001600160a01b039081166004840152858116602484015260448301859052905160009391909116916376e9d615916064808301926020929190829003018186803b158015610ab057600080fd5b505afa158015610ac4573d6000803e3d6000fd5b505050506040513d6020811015610ada57600080fd5b50519392505050565b600080610aef836119ad565b6001600160a01b03841660009081526008602052604090205490915081158015610b17575080155b15610b27576000925050506107d7565b6001600160a01b0384811660009081526007602052604090205416610b7857610b6f81610b6386610b5e868463ffffffff6114c316565b6119c8565b9063ffffffff6118b916565b925050506107d7565b610b6f610b8982610b6387856119c8565b839063ffffffff6114c316565b60055461010090046001600160a01b031681565b600c546001600160a01b03163314610bf35760405162461bcd60e51b81526004018080602001828103825260328152602001806121766032913960400191505060405180910390fd5b600080610bff8461151d565b935093505050610c2384610c1c85856114c390919063ffffffff16565b6000611614565b610c2c8461174b565b610c368484611a7d565b604080518481526020810184905280820183905290516001600160a01b038616917fbe7799898ca2d813ff902b487c1b434ab45b47edd8f38b77ad5e99aae8341b7a919081900360600190a250505050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106265780601f106105fb57610100808354040283529160200191610626565b6000610645610cf661105e565b8461085a856040518060600160405280602581526020016121a86025913960016000610d2061105e565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61142c16565b6000610645610d6461105e565b84846113bd565b6000610649826119ad565b60001981565b60008111610dd1576040805162461bcd60e51b815260206004820181905260248201527f416d6f756e7420746f2072656465656d206e6565647320746f206265203e2030604482015290519081900360640190fd5b6000806000610ddf3361151d565b91955093509150849050600019811415610df65750825b83811115610e355760405162461bcd60e51b8152600401808060200182810382526032815260200180611f886032913960400191505060405180910390fd5b610e3f3382610a48565b610e90576040805162461bcd60e51b815260206004820152601b60248201527f5472616e736665722063616e6e6f7420626520616c6c6f7765642e0000000000604482015290519081900360640190fd5b610e9b338483611614565b610ea43361174b565b610eae33826117bd565b6000610ec0858363ffffffff6118b916565b610ed057610ecd336118fb565b90505b600c546005546001600160a01b0391821691639895e3d8916101009004163385610f008a8263ffffffff6118b916565b6040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b03168152602001838152602001828152602001945050505050600060405180830381600087803b158015610f6f57600080fd5b505af1158015610f83573d6000803e3d6000fd5b50505050336001600160a01b03167fbd5034ffbd47e4e72a94baa2cdb74c6fad73cb3bcdc13036b72ec8306f5a7646838684610a025786610a05565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b031660009081526006602052604090205490565b600c546001600160a01b0316331461104e5760405162461bcd60e51b81526004018080602001828103825260328152602001806121766032913960400191505060405180910390fd5b611059838383611b6d565b505050565b3390565b6001600160a01b0383166110a75760405162461bcd60e51b81526004018080602001828103825260248152602001806121526024913960400191505060405180910390fd5b6001600160a01b0382166110ec5760405162461bcd60e51b8152600401808060200182810382526022815260200180611fba6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0380831660009081526007602052604090205481169082168114156111ab5760405162461bcd60e51b815260040180806020018281038252602a815260200180612070602a913960400191505060405180910390fd5b6000806000806111ba8761151d565b9350935093509350600083116112015760405162461bcd60e51b815260040180806020018281038252604281526020018061209a6042913960600191505060405180910390fd5b6001600160a01b0385161561121c5761121c87600086611614565b866001600160a01b0316866001600160a01b031614156112a8576001600160a01b038716600081815260076020908152604080832080546001600160a01b03191690558051878152918201869052818101859052519192917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a73487355949181900360600190a350505050506108d4565b6001600160a01b03878116600090815260076020526040812080546001600160a01b031916928916929092179091556112e49088908590611614565b604080518481526020810184905280820183905290516001600160a01b0380891692908a16917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a73487355949181900360600190a350505050505050565b60025490565b600061064982633b9aca0063ffffffff611cae16565b600061139d6b033b2e3c9fd0803ce800000061139161137e868663ffffffff611cae16565b6b019d971e4fe8401e74000000906114c3565b9063ffffffff611d0716565b9392505050565b6000631dcd650061139d633b9aca0061139183866114c3565b82816113c98282610a48565b61141a576040805162461bcd60e51b815260206004820152601b60248201527f5472616e736665722063616e6e6f7420626520616c6c6f7765642e0000000000604482015290519081900360640190fd5b611425858585611b6d565b5050505050565b600081848411156114bb5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611480578181015183820152602001611468565b50505050905090810190601f1680156114ad5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008282018381101561139d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600080600080600061152e866119ad565b9050600061153f82610b6389610ae3565b90508015611551576115518782611a7d565b600b546005546040805163d15e005360e01b81526101009092046001600160a01b0390811660048401529051600093919091169163d15e0053916024808301926020929190829003018186803b1580156115aa57600080fd5b505afa1580156115be573d6000803e3d6000fd5b505050506040513d60208110156115d457600080fd5b50516001600160a01b0389166000908152600660205260409020819055905082611604818463ffffffff6114c316565b9099909850919650945092505050565b6001600160a01b03808416600090815260076020526040902054168061163a5750611059565b6000806116468361151d565b6001600160a01b038716600090815260086020526040902054919550935061167c9250869150610b63908863ffffffff6114c316565b6001600160a01b038085166000908152600860209081526040808320949094556007905291909120541680156116ef576001600160a01b0381166000908152600860205260409020546116d5908463ffffffff6114c316565b6001600160a01b0382166000908152600860205260409020555b60408051848152602081018490528082018890526060810187905290516001600160a01b038616917f70ff8cf632603e2bfd1afb7e4061acce53d95356b1be9726b99fa22ba733b01f919081900360800190a250505050505050565b600c546005546040805163b8ccc17560e01b81526101009092046001600160a01b0390811660048401528481166024840152905192169163b8ccc1759160448082019260009290919082900301818387803b1580156117a957600080fd5b505af1158015611425573d6000803e3d6000fd5b6001600160a01b0382166118025760405162461bcd60e51b815260040180806020018281038252602181526020018061210c6021913960400191505060405180910390fd5b61184581604051806060016040528060228152602001611f66602291396001600160a01b038516600090815260208190526040902054919063ffffffff61142c16565b6001600160a01b038316600090815260208190526040902055600254611871908263ffffffff6118b916565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b600061139d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061142c565b6001600160a01b038116600081815260076020908152604080832080546001600160a01b03191690558051838152918201839052818101839052519192839290917f5e3cad45b1fe24159d1cb39788d82d0f69cc15770aa96fba1d3d1a7348735594919081900360600190a36001600160a01b0382166000908152600860205260409020546119a557506001600160a01b03811660009081526006602052604081205560016107d7565b5060006107d7565b6001600160a01b031660009081526020819052604090205490565b6001600160a01b03808316600090815260066020908152604080832054600b54600554835163d15e005360e01b8152610100909104871660048201529251949561139d956107b2959394611a7194939092169263d15e00539260248082019391829003018186803b158015611a3c57600080fd5b505afa158015611a50573d6000803e3d6000fd5b505050506040513d6020811015611a6657600080fd5b50516107a687611343565b9063ffffffff611d4916565b6001600160a01b038216611ad8576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600254611aeb908263ffffffff6114c316565b6002556001600160a01b038216600090815260208190526040902054611b17908263ffffffff6114c316565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008111611bac5760405162461bcd60e51b81526004018080602001828103825260308152602001806120dc6030913960400191505060405180910390fd5b6000806000611bba8661151d565b93509350935050600080611bcd8761151d565b935093505050611bde888588611614565b611bf287610c1c848963ffffffff6114c316565b611bfb8861174b565b611c048761174b565b611c0f888888611d81565b6000611c21868863ffffffff6118b916565b611c3157611c2e896118fb565b90505b876001600160a01b0316896001600160a01b03167f89a178eaa27e0cd201bd795ca8ff716ac0df9618494510ca79771cfc66ffcde889888786611c745789611c77565b60005b60408051948552602085019390935283830191909152606083015260808201879052519081900360a00190a3505050505050505050565b600082611cbd57506000610649565b82820282848281611cca57fe5b041461139d5760405162461bcd60e51b81526004018080602001828103825260218152602001806120276021913960400191505060405180910390fd5b600061139d83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611edd565b600060028204611d7983611391611d6c876b033b2e3c9fd0803ce8000000611cae565b849063ffffffff6114c316565b949350505050565b6001600160a01b038316611dc65760405162461bcd60e51b815260040180806020018281038252602581526020018061212d6025913960400191505060405180910390fd5b6001600160a01b038216611e0b5760405162461bcd60e51b8152600401808060200182810382526023815260200180611f436023913960400191505060405180910390fd5b611e4e81604051806060016040528060268152602001611fdc602691396001600160a01b038616600090815260208190526040902054919063ffffffff61142c16565b6001600160a01b038085166000908152602081905260408082209390935590841681522054611e83908263ffffffff6114c316565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008183611f2c5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611480578181015183820152602001611468565b506000838581611f3857fe5b049594505050505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e6365557365722063616e6e6f742072656465656d206d6f7265207468616e2074686520617661696c61626c652062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365557365722063616e6e6f74206769766520616c6c6f77616e636520746f2068696d73656c66536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365496e74657265737420697320616c7265616479207265646972656374656420746f207468652075736572496e7465726573742073747265616d2063616e206f6e6c79206265207265646972656374656420696620746865726520697320612076616c69642062616c616e63655472616e7366657272656420616d6f756e74206e6565647320746f2062652067726561746572207468616e207a65726f45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735468652063616c6c6572206f6620746869732066756e6374696f6e206d7573742062652061206c656e64696e6720706f6f6c45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f43616c6c6572206973206e6f7420616c6c6f77656420746f2072656469726563742074686520696e746572657374206f66207468652075736572a265627a7a723158202dadf1d6a955da6139c2fa55cdf3b55fa17fada417a0a4a097d19e0d7f19e96864736f6c63430005110032";
