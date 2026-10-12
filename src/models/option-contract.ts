import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Details about the option security.
 *
 * For the Sandbox environment, this data is currently only available if the Item is using a [custom
 * Sandbox user](https://plaid.com/docs/sandbox/user-custom/) and the `ticker` field of the custom
 * security follows the [OCC Option
 * Symbol](https://en.wikipedia.org/wiki/Option_symbol#The_OCC_Option_Symbol) standard with no
 * spaces. For an example of simulating this in Sandbox, see the [custom Sandbox
 * GitHub](https://github.com/plaid/sandbox-custom-users).
 */
export type OptionContract = {
  /**
   * The type of this option contract. It is one of:
   *
   * `put`: for Put option contracts
   *
   * `call`: for Call option contracts
   */
  contractType: string;
  /**
   * The expiration date for this option contract, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  expirationDate: string;
  /** The strike price for this option contract, per share of security. */
  strikePrice: number;
  /** The ticker of the underlying security for this option contract. */
  underlyingSecurityTicker: string;
};

export const optionContractSchema: Schema<OptionContract> = s.object<OptionContract>({
  contractType: s.string(),
  expirationDate: s.dateOnly(),
  strikePrice: s.float64(),
  underlyingSecurityTicker: s.string(),
  _keysMap: {
    contractType: "contract_type",
    expirationDate: "expiration_date",
    strikePrice: "strike_price",
    underlyingSecurityTicker: "underlying_security_ticker",
  },
});
