import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BankTransferEventType = {
  Pending: "pending",
  Cancelled: "cancelled",
  Failed: "failed",
  Posted: "posted",
  Reversed: "reversed",
} as const;
export type BankTransferEventType =
  | (typeof BankTransferEventType)[keyof typeof BankTransferEventType]
  | (string & {});

export const bankTransferEventTypeSchema: EnumSchema<BankTransferEventType> =
  s.enumOf<BankTransferEventType>(BankTransferEventType);
