/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MintableErc20Interface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "mint(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "decimals", values?: void): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: void): string;
  encodeFunctionData(functionFragment: "symbol", values?: void): string;
  encodeFunctionData(functionFragment: "totalSupply", values?: void): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class MintableErc20 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MintableErc20Interface;

  functions: {
    /**
     * returns the allowance of spender on the tokens owned by owner
     * @param owner the owner of the tokens
     * @param spender the user allowed to spend the owner's tokens
     */
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * allows spender to spend the tokens owned by msg.sender
     * @param spender the user allowed to spend msg.sender tokens
     */
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     */
    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     */
    decimals(
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    /**
     * decreases the allowance of spender to spend msg.sender tokens
     * @param spender the user allowed to spend on behalf of msg.sender
     * @param subtractedValue the amount being subtracted to the allowance
     */
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * increases the allowance of spender to spend msg.sender tokens
     * @param addedValue the amount being added to the allowance
     * @param spender the user allowed to spend on behalf of msg.sender
     */
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     */
    name(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     */
    symbol(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     */
    totalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * executes a transfer of tokens from msg.sender to recipient
     * @param amount the amount of tokens being transferred
     * @param recipient the recipient of the tokens
     */
    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * executes a transfer of token from sender to recipient, if msg.sender is allowed to do so
     * @param amount the amount of tokens being transferred
     * @param recipient the recipient of the tokens
     * @param sender the owner of the tokens
     */
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Function to mint tokens
     * @param value The amount of tokens to mint.
     */
    mint(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  /**
   * returns the allowance of spender on the tokens owned by owner
   * @param owner the owner of the tokens
   * @param spender the user allowed to spend the owner's tokens
   */
  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * allows spender to spend the tokens owned by msg.sender
   * @param spender the user allowed to spend msg.sender tokens
   */
  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   */
  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   */
  decimals(overrides?: CallOverrides): Promise<number>;

  /**
   * decreases the allowance of spender to spend msg.sender tokens
   * @param spender the user allowed to spend on behalf of msg.sender
   * @param subtractedValue the amount being subtracted to the allowance
   */
  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * increases the allowance of spender to spend msg.sender tokens
   * @param addedValue the amount being added to the allowance
   * @param spender the user allowed to spend on behalf of msg.sender
   */
  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   */
  name(overrides?: CallOverrides): Promise<string>;

  /**
   */
  symbol(overrides?: CallOverrides): Promise<string>;

  /**
   */
  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * executes a transfer of tokens from msg.sender to recipient
   * @param amount the amount of tokens being transferred
   * @param recipient the recipient of the tokens
   */
  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * executes a transfer of token from sender to recipient, if msg.sender is allowed to do so
   * @param amount the amount of tokens being transferred
   * @param recipient the recipient of the tokens
   * @param sender the owner of the tokens
   */
  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Function to mint tokens
   * @param value The amount of tokens to mint.
   */
  mint(
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  staticCall: {
    /**
     * returns the allowance of spender on the tokens owned by owner
     * @param owner the owner of the tokens
     * @param spender the user allowed to spend the owner's tokens
     */
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * allows spender to spend the tokens owned by msg.sender
     * @param spender the user allowed to spend msg.sender tokens
     */
    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>;

    /**
     */
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     */
    decimals(overrides?: CallOverrides): Promise<number>;

    /**
     * decreases the allowance of spender to spend msg.sender tokens
     * @param spender the user allowed to spend on behalf of msg.sender
     * @param subtractedValue the amount being subtracted to the allowance
     */
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>;

    /**
     * increases the allowance of spender to spend msg.sender tokens
     * @param addedValue the amount being added to the allowance
     * @param spender the user allowed to spend on behalf of msg.sender
     */
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>;

    /**
     */
    name(overrides?: CallOverrides): Promise<string>;

    /**
     */
    symbol(overrides?: CallOverrides): Promise<string>;

    /**
     */
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * executes a transfer of tokens from msg.sender to recipient
     * @param amount the amount of tokens being transferred
     * @param recipient the recipient of the tokens
     */
    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>;

    /**
     * executes a transfer of token from sender to recipient, if msg.sender is allowed to do so
     * @param amount the amount of tokens being transferred
     * @param recipient the recipient of the tokens
     * @param sender the owner of the tokens
     */
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<boolean>;

    /**
     * Function to mint tokens
     * @param value The amount of tokens to mint.
     */
    mint(value: BigNumberish, overrides?: Overrides): Promise<boolean>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    allowance(owner: string, spender: string): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish): Promise<BigNumber>;
    balanceOf(account: string): Promise<BigNumber>;
    decimals(): Promise<BigNumber>;
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish
    ): Promise<BigNumber>;
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish
    ): Promise<BigNumber>;
    name(): Promise<BigNumber>;
    symbol(): Promise<BigNumber>;
    totalSupply(): Promise<BigNumber>;
    transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>;
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish
    ): Promise<BigNumber>;
    mint(value: BigNumberish): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(owner: string, spender: string): Promise<PopulatedTransaction>;
    approve(
      spender: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>;
    balanceOf(account: string): Promise<PopulatedTransaction>;
    decimals(): Promise<PopulatedTransaction>;
    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish
    ): Promise<PopulatedTransaction>;
    increaseAllowance(
      spender: string,
      addedValue: BigNumberish
    ): Promise<PopulatedTransaction>;
    name(): Promise<PopulatedTransaction>;
    symbol(): Promise<PopulatedTransaction>;
    totalSupply(): Promise<PopulatedTransaction>;
    transfer(
      recipient: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>;
    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish
    ): Promise<PopulatedTransaction>;
    mint(value: BigNumberish): Promise<PopulatedTransaction>;
  };
}