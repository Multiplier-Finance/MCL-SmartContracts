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
  PayableOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BaseAdminUpgradeabilityProxyInterface extends ethers.utils.Interface {
  functions: {
    "admin()": FunctionFragment;
    "implementation()": FunctionFragment;
    "changeAdmin(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: void): string;
  encodeFunctionData(functionFragment: "implementation", values?: void): string;
  encodeFunctionData(functionFragment: "changeAdmin", values: [string]): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export class BaseAdminUpgradeabilityProxy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BaseAdminUpgradeabilityProxyInterface;

  functions: {
    /**
     * @returns The address of the proxy admin.
     */
    admin(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * @returns The address of the implementation.
     */
    implementation(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Changes the admin of the proxy. Only the current admin can call this function.
     * @param newAdmin Address to transfer proxy administration to.
     */
    changeAdmin(
      newAdmin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Upgrade the backing implementation of the proxy. Only the admin can call this function.
     * @param newImplementation Address of the new implementation.
     */
    upgradeTo(
      newImplementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Upgrade the backing implementation of the proxy and call a function on the new implementation. This is useful to initialize the proxied contract.
     * @param data Data to send as msg.data in the low level call. It should include the signature and the parameters of the function to be called, as described in https://solidity.readthedocs.io/en/v0.4.24/abi-spec.html#function-selector-and-argument-encoding.
     * @param newImplementation Address of the new implementation.
     */
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  /**
   * @returns The address of the proxy admin.
   */
  admin(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * @returns The address of the implementation.
   */
  implementation(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Changes the admin of the proxy. Only the current admin can call this function.
   * @param newAdmin Address to transfer proxy administration to.
   */
  changeAdmin(
    newAdmin: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Upgrade the backing implementation of the proxy. Only the admin can call this function.
   * @param newImplementation Address of the new implementation.
   */
  upgradeTo(
    newImplementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Upgrade the backing implementation of the proxy and call a function on the new implementation. This is useful to initialize the proxied contract.
   * @param data Data to send as msg.data in the low level call. It should include the signature and the parameters of the function to be called, as described in https://solidity.readthedocs.io/en/v0.4.24/abi-spec.html#function-selector-and-argument-encoding.
   * @param newImplementation Address of the new implementation.
   */
  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  staticCall: {
    /**
     * @returns The address of the proxy admin.
     */
    admin(overrides?: Overrides): Promise<string>;

    /**
     * @returns The address of the implementation.
     */
    implementation(overrides?: Overrides): Promise<string>;

    /**
     * Changes the admin of the proxy. Only the current admin can call this function.
     * @param newAdmin Address to transfer proxy administration to.
     */
    changeAdmin(newAdmin: string, overrides?: Overrides): Promise<void>;

    /**
     * Upgrade the backing implementation of the proxy. Only the admin can call this function.
     * @param newImplementation Address of the new implementation.
     */
    upgradeTo(newImplementation: string, overrides?: Overrides): Promise<void>;

    /**
     * Upgrade the backing implementation of the proxy and call a function on the new implementation. This is useful to initialize the proxied contract.
     * @param data Data to send as msg.data in the low level call. It should include the signature and the parameters of the function to be called, as described in https://solidity.readthedocs.io/en/v0.4.24/abi-spec.html#function-selector-and-argument-encoding.
     * @param newImplementation Address of the new implementation.
     */
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<void>;
  };

  filters: {
    AdminChanged(previousAdmin: null, newAdmin: null): EventFilter;

    Upgraded(implementation: string | null): EventFilter;
  };

  estimateGas: {
    admin(): Promise<BigNumber>;
    implementation(): Promise<BigNumber>;
    changeAdmin(newAdmin: string): Promise<BigNumber>;
    upgradeTo(newImplementation: string): Promise<BigNumber>;
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(): Promise<PopulatedTransaction>;
    implementation(): Promise<PopulatedTransaction>;
    changeAdmin(newAdmin: string): Promise<PopulatedTransaction>;
    upgradeTo(newImplementation: string): Promise<PopulatedTransaction>;
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike
    ): Promise<PopulatedTransaction>;
  };
}
