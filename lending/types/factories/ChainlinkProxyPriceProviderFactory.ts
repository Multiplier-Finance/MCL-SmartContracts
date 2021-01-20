/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ChainlinkProxyPriceProvider } from "../ChainlinkProxyPriceProvider";

export class ChainlinkProxyPriceProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _assets: string[],
    _sources: string[],
    _fallbackOracle: string,
    overrides?: Overrides
  ): Promise<ChainlinkProxyPriceProvider> {
    return super.deploy(
      _assets,
      _sources,
      _fallbackOracle,
      overrides || {}
    ) as Promise<ChainlinkProxyPriceProvider>;
  }
  getDeployTransaction(
    _assets: string[],
    _sources: string[],
    _fallbackOracle: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _assets,
      _sources,
      _fallbackOracle,
      overrides || {}
    );
  }
  attach(address: string): ChainlinkProxyPriceProvider {
    return super.attach(address) as ChainlinkProxyPriceProvider;
  }
  connect(signer: Signer): ChainlinkProxyPriceProviderFactory {
    return super.connect(signer) as ChainlinkProxyPriceProviderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkProxyPriceProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkProxyPriceProvider;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_sources",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_fallbackOracle",
        type: "address",
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
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "source",
        type: "address",
      },
    ],
    name: "AssetSourceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fallbackOracle",
        type: "address",
      },
    ],
    name: "FallbackOracleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "getAssetPrice",
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
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
    ],
    name: "getAssetsPrices",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getFallbackOracle",
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
        name: "_asset",
        type: "address",
      },
    ],
    name: "getSourceOfAsset",
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
    inputs: [],
    name: "isOwner",
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
    inputs: [],
    name: "owner",
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
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_sources",
        type: "address[]",
      },
    ],
    name: "setAssetSources",
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
        name: "_fallbackOracle",
        type: "address",
      },
    ],
    name: "setFallbackOracle",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e3138038062000e31833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82518660208202830111640100000000821117156200008c57600080fd5b82525081516020918201928201910280838360005b83811015620000bb578181015183820152602001620000a1565b5050505090500160405260200180516040519392919084640100000000821115620000e557600080fd5b908301906020820185811115620000fb57600080fd5b82518660208202830111640100000000821117156200011957600080fd5b82525081516020918201928201910280838360005b83811015620001485781810151838201526020016200012e565b5050505091909101604052506020015191506200016f90506001600160e01b03620001e916565b600080546001600160a01b0319166001600160a01b03928316178082556040519216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3620001cb816001600160e01b03620001ed16565b620001e083836001600160e01b036200023716565b50505062000383565b3390565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fce7a780d33665b1ea097af5f155e3821b809ecbaa839d3b33aa83ba28168cefb90600090a250565b80518251146200028e576040805162461bcd60e51b815260206004820152601a60248201527f494e434f4e53495354454e545f504152414d535f4c454e475448000000000000604482015290519081900360640190fd5b60005b82518110156200037e57818181518110620002a857fe5b602002602001015160016000858481518110620002c157fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508181815181106200031a57fe5b60200260200101516001600160a01b03168382815181106200033857fe5b60200260200101516001600160a01b03167f22c5b7b2d8561d39f7f210b6b326a1aa69f15311163082308ac4877db6339dc160405160405180910390a360010162000291565b505050565b610a9e80620003936000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806392bf2be01161006657806392bf2be01461011b5780639d23d9f214610141578063abfd531014610201578063b3596f07146102c3578063f2fde38b146102fb5761009e565b8063170aee73146100a35780636210308c146100cb578063715018a6146100ef5780638da5cb5b146100f75780638f32d59b146100ff575b600080fd5b6100c9600480360360208110156100b957600080fd5b50356001600160a01b0316610321565b005b6100d3610374565b604080516001600160a01b039092168252519081900360200190f35b6100c9610383565b6100d3610414565b610107610423565b604080519115158252519081900360200190f35b6100d36004803603602081101561013157600080fd5b50356001600160a01b0316610447565b6101b16004803603602081101561015757600080fd5b81019060208101813564010000000081111561017257600080fd5b82018360208201111561018457600080fd5b803590602001918460208302840111640100000000831117156101a657600080fd5b509092509050610468565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101ed5781810151838201526020016101d5565b505050509050019250505060405180910390f35b6100c96004803603604081101561021757600080fd5b81019060208101813564010000000081111561023257600080fd5b82018360208201111561024457600080fd5b8035906020019184602083028401116401000000008311171561026657600080fd5b91939092909160208101903564010000000081111561028457600080fd5b82018360208201111561029657600080fd5b803590602001918460208302840111640100000000831117156102b857600080fd5b5090925090506104f1565b6102e9600480360360208110156102d957600080fd5b50356001600160a01b03166105ab565b60408051918252519081900360200190f35b6100c96004803603602081101561031157600080fd5b50356001600160a01b0316610788565b610329610423565b610368576040805162461bcd60e51b81526020600482018190526024820152600080516020610a4a833981519152604482015290519081900360640190fd5b610371816107d8565b50565b6002546001600160a01b031690565b61038b610423565b6103ca576040805162461bcd60e51b81526020600482018190526024820152600080516020610a4a833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b600080546001600160a01b0316610438610822565b6001600160a01b031614905090565b6001600160a01b03808216600090815260016020526040902054165b919050565b60608083839050604051908082528060200260200182016040528015610498578160200160208202803883390190505b50905060005b838110156104e9576104ca8585838181106104b557fe5b905060200201356001600160a01b03166105ab565b8282815181106104d657fe5b602090810291909101015260010161049e565b509392505050565b6104f9610423565b610538576040805162461bcd60e51b81526020600482018190526024820152600080516020610a4a833981519152604482015290519081900360640190fd5b6105a58484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060408051602080880282810182019093528782529093508792508691829185019084908082843760009201919091525061082692505050565b50505050565b6001600160a01b038082166000908152600160205260408120549091166105d061096b565b6001600160a01b0316836001600160a01b031614156105fa57670de0b6b3a7640000915050610463565b6001600160a01b03811661068a576002546040805163b3596f0760e01b81526001600160a01b0386811660048301529151919092169163b3596f07916024808301926020929190829003018186803b15801561065557600080fd5b505afa158015610669573d6000803e3d6000fd5b505050506040513d602081101561067f57600080fd5b505191506104639050565b6000816001600160a01b03166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106c557600080fd5b505afa1580156106d9573d6000803e3d6000fd5b505050506040513d60208110156106ef57600080fd5b5051905060008113156107055791506104639050565b6002546040805163b3596f0760e01b81526001600160a01b0387811660048301529151919092169163b3596f07916024808301926020929190829003018186803b15801561075257600080fd5b505afa158015610766573d6000803e3d6000fd5b505050506040513d602081101561077c57600080fd5b50519250610463915050565b610790610423565b6107cf576040805162461bcd60e51b81526020600482018190526024820152600080516020610a4a833981519152604482015290519081900360640190fd5b61037181610983565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fce7a780d33665b1ea097af5f155e3821b809ecbaa839d3b33aa83ba28168cefb90600090a250565b3390565b805182511461087c576040805162461bcd60e51b815260206004820152601a60248201527f494e434f4e53495354454e545f504152414d535f4c454e475448000000000000604482015290519081900360640190fd5b60005b82518110156109665781818151811061089457fe5b6020026020010151600160008584815181106108ac57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555081818151811061090457fe5b60200260200101516001600160a01b031683828151811061092157fe5b60200260200101516001600160a01b03167f22c5b7b2d8561d39f7f210b6b326a1aa69f15311163082308ac4877db6339dc160405160405180910390a360010161087f565b505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee90565b6001600160a01b0381166109c85760405162461bcd60e51b8152600401808060200182810382526026815260200180610a246026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a265627a7a7231582033ba9890b36dd602a463d647df27474729c1c025f75f89008f35300dbf91711c64736f6c63430005110032";