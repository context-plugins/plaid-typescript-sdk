import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationAddressSchema,
  type PaymentInitiationAddress,
} from "./payment-initiation-address.js";

/**
 * The original source of the funds. This field is required by local regulation for certain
 * businesses (e.g. money remittance) to send payouts to recipients in the EU and UK.
 */
export type OriginatingFundSource = {
  /** The full name associated with the source of the funds. */
  fullName: string;
  /**
   * The optional address of the payment recipient's bank account. Required by most institutions
   * outside of the UK.
   */
  address: PaymentInitiationAddress | null;
  /** The account number from which the funds are sourced. */
  accountNumber: string;
  /** The Business Identifier Code, also known as SWIFT code, for this bank account. */
  bic: string;
};

export const originatingFundSourceSchema: Schema<OriginatingFundSource> = s.object<OriginatingFundSource>({
  fullName: s.string(),
  address: s.nullable(s.lazy(() => paymentInitiationAddressSchema)),
  accountNumber: s.string(),
  bic: s.string(),
  _keysMap: {
    fullName: "full_name",
    accountNumber: "account_number",
  },
});
