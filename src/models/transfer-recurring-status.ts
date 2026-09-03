import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferRecurringStatus = {
  Active: "active",
  Cancelled: "cancelled",
  Expired: "expired",
} as const;
export type TransferRecurringStatus =
  | (typeof TransferRecurringStatus)[keyof typeof TransferRecurringStatus]
  | (string & {});

export const transferRecurringStatusSchema: EnumSchema<TransferRecurringStatus> =
  s.enumOf<TransferRecurringStatus>(TransferRecurringStatus);
