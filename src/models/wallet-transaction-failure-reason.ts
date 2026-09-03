import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
