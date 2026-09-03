import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
