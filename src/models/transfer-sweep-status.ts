import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the sweep for the transfer.
 *
 * `unswept`: The transfer hasn't been swept yet. `swept`: The transfer was swept to the sweep
 * account. `swept_settled`: Credits are available to be withdrawn or debits have been deducted from
 * the customer's business checking account. `return_swept`: The transfer was returned, funds were
 * pulled back or pushed back to the sweep account. `null`: The transfer will never be swept (e.g.
 * if the transfer is cancelled or returned before being swept)
 */
export const TransferSweepStatus = {
  Unswept: "unswept",
  Swept: "swept",
  SweptSettled: "swept_settled",
  ReturnSwept: "return_swept",
} as const;
export type TransferSweepStatus =
  | (typeof TransferSweepStatus)[keyof typeof TransferSweepStatus]
  | (string & {});

export const transferSweepStatusSchema: EnumSchema<TransferSweepStatus> =
  s.enumOf<TransferSweepStatus>(TransferSweepStatus);
