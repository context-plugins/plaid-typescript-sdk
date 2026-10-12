import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferRefundFailureSchema, type TransferRefundFailure } from "./transfer-refund-failure.js";
import { transferRefundStatusSchema, type TransferRefundStatus } from "./transfer-refund-status.js";

/** Represents a refund within the Transfers API. */
export type TransferRefund = {
  /** Plaid's unique identifier for a refund. */
  id: string;
  /** The ID of the transfer to refund. */
  transferId: string;
  /** The amount of the refund (decimal string with two digits of precision e.g. "10.00"). */
  amount: string;
  /**
   * The status of the refund.
   *
   * `pending`: A new refund was created; it is in the pending state. `posted`: The refund has been
   * successfully submitted to the payment network. `settled`: Credits have been refunded to the
   * Plaid linked account. `cancelled`: The refund was cancelled by the client. `failed`: The refund
   * has failed. `returned`: The refund was returned.
   */
  status: TransferRefundStatus;
  /**
   * The failure reason if the status for a refund is `"failed"` or `"returned"`. Null value
   * otherwise.
   */
  failureReason: TransferRefundFailure | null;
  /** Plaid's unique identifier for a Plaid Ledger Balance. */
  ledgerId?: string | null;
  /** The datetime when this refund was created. This will be of the form `2006-01-02T15:04:05Z` */
  created: Date;
  /**
   * The trace identifier for the transfer based on its network. This will only be set after the
   * transfer has posted.
   *
   * For `ach` or `same-day-ach` transfers, this is the ACH trace number. For `rtp` transfers, this
   * is the Transaction Identification number. For `wire` transfers, this is the IMAD (Input Message
   * Accountability Data) number.
   */
  networkTraceId?: string | null;
};

export const transferRefundSchema: Schema<TransferRefund> = s.object<TransferRefund>({
  id: s.string(),
  transferId: s.string(),
  amount: s.string(),
  status: transferRefundStatusSchema,
  failureReason: s.nullable(s.lazy(() => transferRefundFailureSchema)),
  ledgerId: s.optionalNullable(s.string()),
  created: s.dateTime(),
  networkTraceId: s.optionalNullable(s.string()),
  _keysMap: {
    transferId: "transfer_id",
    failureReason: "failure_reason",
    ledgerId: "ledger_id",
    networkTraceId: "network_trace_id",
  },
});
