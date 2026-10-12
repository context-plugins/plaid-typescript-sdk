import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the refund.
 *
 * `pending`: A new refund was created; it is in the pending state. `posted`: The refund has been
 * successfully submitted to the payment network. `settled`: Credits have been refunded to the Plaid
 * linked account. `cancelled`: The refund was cancelled by the client. `failed`: The refund has
 * failed. `returned`: The refund was returned.
 */
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
