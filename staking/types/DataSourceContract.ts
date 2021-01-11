/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, Signer} from 'ethers';
import {Provider} from '@ethersproject/providers';

import {DataSource} from './DataSource';

export class DataSourceFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): DataSource {
    return new Contract(address, _abi, signerOrProvider) as DataSource;
  }
}

const _abi = [
  {
    inputs: [],
    name: 'getData',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
        ],
        internalType: 'struct Types.UserData[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
