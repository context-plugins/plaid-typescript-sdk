import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Result of payee verification check for EUR payouts. Payee verification checks whether the payee
 * name provided matches the account holder name at the destination institution.
 *
 * `FULL_MATCH`: The payee name fully matches the account holder.
 *
 * `PARTIAL_MATCH`: The payee name partially matches the account holder.
 *
 * `NO_MATCH`: The payee name does not match the account holder.
 *
 * `ERROR`: An error occurred during payee verification.
 *
 * `CHECK_NOT_POSSIBLE`: Payee verification could not be performed.
 *
 * This field is only populated for applicable EUR payout transactions and will be `null` for other
 * transaction types.
 */
export const WalletTransactionPayeeVerificationStatus = {
  FullMatch: "FULL_MATCH",
  PartialMatch: "PARTIAL_MATCH",
  NoMatch: "NO_MATCH",
  Error: "ERROR",
  CheckNotPossible: "CHECK_NOT_POSSIBLE",
} as const;
export type WalletTransactionPayeeVerificationStatus =
  | (typeof WalletTransactionPayeeVerificationStatus)[keyof typeof WalletTransactionPayeeVerificationStatus]
  | (string & {});

export const walletTransactionPayeeVerificationStatusSchema: EnumSchema<WalletTransactionPayeeVerificationStatus> =
  s.enumOf<WalletTransactionPayeeVerificationStatus>(WalletTransactionPayeeVerificationStatus);
