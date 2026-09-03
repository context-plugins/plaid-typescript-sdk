import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WalletTransactionStatus = {
  Authorising: "AUTHORISING",
  Initiated: "INITIATED",
  Executed: "EXECUTED",
  Settled: "SETTLED",
  Blocked: "BLOCKED",
  Failed: "FAILED",
} as const;
export type WalletTransactionStatus =
  | (typeof WalletTransactionStatus)[keyof typeof WalletTransactionStatus]
  | (string & {});

export const walletTransactionStatusSchema: EnumSchema<WalletTransactionStatus> =
  s.enumOf<WalletTransactionStatus>(WalletTransactionStatus);
