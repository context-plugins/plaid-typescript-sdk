import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The error code of a failed transaction. Error codes include: `EXTERNAL_SYSTEM`: The transaction
 * was declined by an external system. `EXPIRED`: The transaction request has expired. `CANCELLED`:
 * The transaction request was rescinded. `INVALID`: The transaction did not meet certain criteria,
 * such as an inactive account or no valid counterparty, etc. `ACCOUNT_INVALID`: The transaction
 * could not be processed because the wallet account is invalid or inactive.
 * `AUTHENTICATION_FAILED`: The transaction could not be processed because authentication with the
 * wallet provider failed. `UNKNOWN`: The transaction was unsuccessful, but the exact cause is
 * unknown.
 */
export const WalletTransactionFailureReason = {
  ExternalSystem: "EXTERNAL_SYSTEM",
  Expired: "EXPIRED",
  Cancelled: "CANCELLED",
  Invalid: "INVALID",
  AccountInvalid: "ACCOUNT_INVALID",
  AuthenticationFailed: "AUTHENTICATION_FAILED",
  Unknown: "UNKNOWN",
} as const;
export type WalletTransactionFailureReason =
  | (typeof WalletTransactionFailureReason)[keyof typeof WalletTransactionFailureReason]
  | (string & {});

export const walletTransactionFailureReasonSchema: EnumSchema<WalletTransactionFailureReason> =
  s.enumOf<WalletTransactionFailureReason>(WalletTransactionFailureReason);
