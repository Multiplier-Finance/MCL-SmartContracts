import BigNumber from '../../StakedbMXX/node_modules/bignumber.js.js';
import {BigNumber as BigNumberEthers, BigNumberish} from 'ethers';

export type BigNumberValue = string | number | BigNumber | BigNumberEthers | BigNumberish;

export const BigNumberZD = BigNumber.clone({
  DECIMAL_PLACES: 0,
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
});

export function valueToBigNumber(amount: BigNumberValue): BigNumber {
  return new BigNumber(amount.toString());
}
export function valueToZDBigNumber(amount: BigNumberValue): BigNumber {
  return new BigNumberZD(amount.toString());
}