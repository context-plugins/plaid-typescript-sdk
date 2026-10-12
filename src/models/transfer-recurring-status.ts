import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the recurring transfer.
 *
 * `active`: The recurring transfer is currently active. `cancelled`: The recurring transfer was
 * cancelled by the client or Plaid. `expired`: The recurring transfer has completed all
 * originations according to its recurring schedule.
 */
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
