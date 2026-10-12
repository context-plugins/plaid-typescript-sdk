import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the transfer. */
export const BankTransferStatus = {
  Pending: "pending",
  Posted: "posted",
  Cancelled: "cancelled",
  Failed: "failed",
  Reversed: "reversed",
} as const;
export type BankTransferStatus = (typeof BankTransferStatus)[keyof typeof BankTransferStatus] | (string & {});

export const bankTransferStatusSchema: EnumSchema<BankTransferStatus> =
  s.enumOf<BankTransferStatus>(BankTransferStatus);
