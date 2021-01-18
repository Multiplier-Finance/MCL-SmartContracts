/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PriceOracleInterface extends ethers.utils.Interface {
  functions: {
    "getAssetPrice(address)": FunctionFragment;
    "setAssetPrice(address,uint256)": FunctionFragment;
    "getEthUsdPrice()": FunctionFragment;
    "setEthUsdPrice(uint256)": FunctionFragment;
    "getAssetsPrices(address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetPrice",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getEthUsdPrice", values?: void): string;
  encodeFunctionData(
    functionFragment: "setEthUsdPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetsPrices",
    values: [string[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthUsdPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEthUsdPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetsPrices",
    data: BytesLike
  ): Result;

  events: {
    "AssetPriceUpdated(address,uint256,uint256)": EventFragment;
    "EthPriceUpdated(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetPriceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EthPriceUpdated"): EventFragment;
}

export class PriceOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PriceOracleInterface;

  functions: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    setAssetPrice(
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getEthUsdPrice(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    setEthUsdPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getAssetsPrices(
      _assets: string[],
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;
  };

  getAssetPrice(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  setAssetPrice(
    _asset: string,
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;

  setEthUsdPrice(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getAssetsPrices(
    _assets: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  staticCall: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAssetPrice(
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<void>;

    getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;

    setEthUsdPrice(_price: BigNumberish, overrides?: Overrides): Promise<void>;

    getAssetsPrices(
      _assets: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {
    AssetPriceUpdated(_asset: null, _price: null, timestamp: null): EventFilter;

    EthPriceUpdated(_price: null, timestamp: null): EventFilter;
  };

  estimateGas: {
    getAssetPrice(_asset: string): Promise<BigNumber>;
    setAssetPrice(_asset: string, _price: BigNumberish): Promise<BigNumber>;
    getEthUsdPrice(): Promise<BigNumber>;
    setEthUsdPrice(_price: BigNumberish): Promise<BigNumber>;
    getAssetsPrices(_assets: string[]): Promise<BigNumber>;
  };

  populateTransaction: {
    getAssetPrice(_asset: string): Promise<PopulatedTransaction>;
    setAssetPrice(
      _asset: string,
      _price: BigNumberish
    ): Promise<PopulatedTransaction>;
    getEthUsdPrice(): Promise<PopulatedTransaction>;
    setEthUsdPrice(_price: BigNumberish): Promise<PopulatedTransaction>;
    getAssetsPrices(_assets: string[]): Promise<PopulatedTransaction>;
  };
}