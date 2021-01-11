/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { Erc20WithSnapshot } from "./Erc20WithSnapshot";

export class Erc20WithSnapshotFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): Promise<Erc20WithSnapshot> {
    return super.deploy(name, symbol, decimals, overrides || {}) as Promise<
      Erc20WithSnapshot
    >;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, decimals, overrides || {});
  }
  attach(address: string): Erc20WithSnapshot {
    return super.attach(address) as Erc20WithSnapshot;
  }
  connect(signer: Signer): Erc20WithSnapshotFactory {
    return super.connect(signer) as Erc20WithSnapshotFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc20WithSnapshot {
    return new Contract(address, _abi, signerOrProvider) as Erc20WithSnapshot;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "oldValue",
        type: "uint128"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "newValue",
        type: "uint128"
      }
    ],
    name: "SnapshotDone",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "_bMXXGovernance",
    outputs: [
      {
        internalType: "contract ITransferHook",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "_countsSnapshots",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "_snapshots",
    outputs: [
      {
        internalType: "uint128",
        name: "blockNumber",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "value",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620010a9380380620010a9833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604052602090810151855190935085925084918491620001c09160039190860190620001f7565b508151620001d6906004906020850190620001f7565b506005805460ff191660ff9290921691909117905550620002939350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200023a57805160ff19168380011785556200026a565b828001600101855582156200026a579182015b828111156200026a5782518255916020019190600101906200024d565b50620002789291506200027c565b5090565b5b808211156200027857600081556001016200027d565b610e0680620002a36000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d7146102f5578063a9059cbb14610321578063c3863ada1461034d578063dd62ed3e14610371576100ea565b806370a08231146102a15780638779588c146102c757806395d89b41146102ed576100ea565b806323b872dd116100c857806323b872dd146101c65780632acbf823146101fc578063313ce567146102575780633950935114610275576100ea565b806306fdde03146100ef578063095ea7b31461016c57806318160ddd146101ac575b600080fd5b6100f761039f565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610131578181015183820152602001610119565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101986004803603604081101561018257600080fd5b506001600160a01b038135169060200135610435565b604080519115158252519081900360200190f35b6101b4610452565b60408051918252519081900360200190f35b610198600480360360608110156101dc57600080fd5b506001600160a01b03813581169160208101359091169060400135610458565b6102286004803603604081101561021257600080fd5b506001600160a01b0381351690602001356104df565b60405180836001600160801b03168152602001826001600160801b031681526020019250505060405180910390f35b61025f610510565b6040805160ff9092168252519081900360200190f35b6101986004803603604081101561028b57600080fd5b506001600160a01b038135169060200135610519565b6101b4600480360360208110156102b757600080fd5b50356001600160a01b0316610567565b6101b4600480360360208110156102dd57600080fd5b50356001600160a01b0316610582565b6100f7610594565b6101986004803603604081101561030b57600080fd5b506001600160a01b0381351690602001356105f5565b6101986004803603604081101561033757600080fd5b506001600160a01b03813516906020013561065d565b610355610671565b604080516001600160a01b039092168252519081900360200190f35b6101b46004803603604081101561038757600080fd5b506001600160a01b0381358116916020013516610680565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561042b5780601f106104005761010080835404028352916020019161042b565b820191906000526020600020905b81548152906001019060200180831161040e57829003601f168201915b5050505050905090565b60006104496104426106ab565b84846106af565b50600192915050565b60025490565b600061046584848461079b565b6104d5846104716106ab565b6104d085604051806060016040528060288152602001610d3b602891396001600160a01b038a166000908152600160205260408120906104af6106ab565b6001600160a01b0316815260208101919091526040016000205491906108f6565b6106af565b5060019392505050565b60066020908152600092835260408084209091529082529020546001600160801b0380821691600160801b90041682565b60055460ff1690565b60006104496105266106ab565b846104d085600160006105376106ab565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549061098d565b6001600160a01b031660009081526020819052604090205490565b60076020526000908152604090205481565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561042b5780601f106104005761010080835404028352916020019161042b565b60006104496106026106ab565b846104d085604051806060016040528060258152602001610dac602591396001600061062c6106ab565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906108f6565b600061044961066a6106ab565b848461079b565b6008546001600160a01b031681565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166106f45760405162461bcd60e51b8152600401808060200182810382526024815260200180610d886024913960400191505060405180910390fd5b6001600160a01b0382166107395760405162461bcd60e51b8152600401808060200182810382526022815260200180610cf36022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166107e05760405162461bcd60e51b8152600401808060200182810382526025815260200180610d636025913960400191505060405180910390fd5b6001600160a01b0382166108255760405162461bcd60e51b8152600401808060200182810382526023815260200180610cd06023913960400191505060405180910390fd5b6108308383836109ee565b61086d81604051806060016040528060268152602001610d15602691396001600160a01b03861660009081526020819052604090205491906108f6565b6001600160a01b03808516600090815260208190526040808220939093559084168152205461089c908261098d565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156109855760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561094a578181015183820152602001610932565b50505050905090810190601f1680156109775780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156109e7576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b816001600160a01b0316836001600160a01b03161415610a0d57610b01565b6001600160a01b03831615610a3f576000610a2784610567565b9050610a3d8482610a388186610b06565b610b48565b505b6001600160a01b03821615610a6c576000610a5983610567565b9050610a6a8382610a38818661098d565b505b6008546001600160a01b03168015610aff57806001600160a01b0316634a3931498585856040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050600060405180830381600087803b158015610ae657600080fd5b505af1158015610afa573d6000803e3d6000fd5b505050505b505b505050565b60006109e783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506108f6565b6001600160a01b03831660009081526007602090815260408083205460069092529091204391908115801590610bad57506001600160801b038316816000610b91856001610b06565b81526020810191909152604001600020546001600160801b0316145b15610bf15783816000610bc1856001610b06565b8152602081019190915260400160002080546001600160801b03928316600160801b029216919091179055610c75565b6040805180820182526001600160801b0380861682528681166020808401918252600087815290869052939093209151825493518216600160801b029082166fffffffffffffffffffffffffffffffff199094169390931716919091179055610c5b82600161098d565b6001600160a01b0387166000908152600760205260409020555b604080516001600160a01b03881681526001600160801b03808816602083015286168183015290517f2cd3c83ddac2953ee75f53265d9ea4463eaf05030e5459a1b7e63819b7ce88f79181900360600190a150505050505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122093fcaa6469dd451360bc083f249ac2d70e669e2e30df22380ba64caa772acc0664736f6c634300060c0033";
