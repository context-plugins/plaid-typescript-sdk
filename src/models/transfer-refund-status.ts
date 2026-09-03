import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferRefundStatus = {
  Pending: "pending",
  Posted: "posted",
  Cancelled: "cancelled",
  Failed: "failed",
  Settled: "settled",
  Returned: "returned",
} as const;
export type TransferRefundStatus =
  | (typeof TransferRefundStatus)[keyof typeof TransferRefundStatus]
  | (string & {});

export const transferRefundStatusSchema: EnumSchema<TransferRefundStatus> =
  s.enumOf<TransferRefundStatus>(TransferRefundStatus);
