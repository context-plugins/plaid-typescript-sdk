import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferEventType = {
  Pending: "pending",
  Cancelled: "cancelled",
  Failed: "failed",
  Posted: "posted",
  Settled: "settled",
  FundsAvailable: "funds_available",
  Guaranteed: "guaranteed",
  Returned: "returned",
  GuaranteeReimbursed: "guarantee_reimbursed",
  ClientReturnRecovered: "client_return_recovered",
  PlaidReturnRecovered: "plaid_return_recovered",
  Swept: "swept",
  SweptSettled: "swept_settled",
  ReturnSwept: "return_swept",
  SweepPending: "sweep.pending",
  SweepPosted: "sweep.posted",
  SweepSettled: "sweep.settled",
  SweepReturned: "sweep.returned",
  SweepFailed: "sweep.failed",
  SweepFundsAvailable: "sweep.funds_available",
  RefundPending: "refund.pending",
  RefundCancelled: "refund.cancelled",
  RefundFailed: "refund.failed",
  RefundPosted: "refund.posted",
  RefundSettled: "refund.settled",
  RefundReturned: "refund.returned",
  RefundSwept: "refund.swept",
  RefundReturnSwept: "refund.return_swept",
} as const;
export type TransferEventType = (typeof TransferEventType)[keyof typeof TransferEventType] | (string & {});

export const transferEventTypeSchema: EnumSchema<TransferEventType> =
  s.enumOf<TransferEventType>(TransferEventType);
