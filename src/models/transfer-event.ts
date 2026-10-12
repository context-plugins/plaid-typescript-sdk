import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { omittableTransferTypeSchema, type OmittableTransferType } from "./omittable-transfer-type.js";
import { transferEventTypeSchema, type TransferEventType } from "./transfer-event-type.js";
import { transferFailureSchema, type TransferFailure } from "./transfer-failure.js";

/** Represents an event in the Transfers API. */
export type TransferEvent = {
  /** Plaid's unique identifier for this event. IDs are sequential unsigned 64-bit integers. */
  eventId: number;
  /** The datetime when this event occurred. This will be of the form `2006-01-02T15:04:05Z`. */
  timestamp: Date;
  /**
   * The type of event that this transfer represents. Event types with prefix `sweep` represent
   * events for Plaid Ledger sweeps.
   *
   * `pending`: A new transfer was created; it is in the pending state.
   *
   * `cancelled`: The transfer was cancelled by the client.
   *
   * `failed`: The transfer failed, no funds were moved.
   *
   * `posted`: The transfer has been successfully submitted to the payment network.
   *
   * `settled`: The transfer has been successfully completed by the payment network.
   *
   * `funds_available`: Funds from the transfer have been released from hold and applied to the
   * ledger's available balance. (Only applicable to ACH debits.)
   *
   * `guaranteed`: The transfer has been fully guaranteed by Plaid.
   *
   * `returned`: A posted transfer was returned.
   *
   * `guarantee_reimbursed`: Plaid reimbursed the client for the loss on a returned guaranteed
   * transfer. The `event_amount` is the reimbursed amount.
   *
   * `client_return_recovered`: The client reported recovering the loss on a returned transfer via
   * `/transfer/return/recover`, and Plaid debited the recovered amount from the client's ledger.
   * The `event_amount` is the recovered amount.
   *
   * `plaid_return_recovered`: Plaid recovered the loss on a returned transfer by successfully
   * reinitiating it. The `event_amount` is the recovered amount. Client should stop their return
   * recovery effort.
   *
   * `swept`: The transfer was swept to / from the sweep account.
   *
   * `swept_settled`: Credits are available to be withdrawn or debits have been deducted from the
   * customer's business checking account.
   *
   * `return_swept`: Due to the transfer being returned, funds were pulled from or pushed back to
   * the sweep account.
   *
   * `sweep.pending`: A new ledger sweep was created; it is in the pending state.
   *
   * `sweep.posted`: The ledger sweep has been successfully submitted to the payment network.
   *
   * `sweep.settled`: The transaction has settled in the funding account. This means that funds
   * withdrawn from Plaid Ledger balance have reached the funding account, or funds to be deposited
   * into the Plaid Ledger Balance have been pulled, and the hold period has begun.
   *
   * `sweep.returned`: A posted ledger sweep was returned.
   *
   * `sweep.failed`: The ledger sweep failed, no funds were moved.
   *
   * `sweep.funds_available`: Funds from the ledger sweep have been released from hold and applied
   * to the ledger's available balance. This is only applicable to debits.
   *
   * `refund.pending`: A new refund was created; it is in the pending state.
   *
   * `refund.cancelled`: The refund was cancelled.
   *
   * `refund.failed`: The refund failed, no funds were moved.
   *
   * `refund.posted`: The refund has been successfully submitted to the payment network.
   *
   * `refund.settled`: The refund transaction has settled in the Plaid linked account.
   *
   * `refund.returned`: A posted refund was returned.
   *
   * `refund.swept`: The refund was swept from the sweep account.
   *
   * `refund.return_swept`: Due to the refund being returned, funds were pushed back to the sweep
   * account.
   */
  eventType: TransferEventType;
  /**
   * The account ID associated with the transfer. This field is omitted for Plaid Ledger Sweep
   * events.
   */
  accountId?: string;
  /**
   * The id of the associated funding account, available in the Plaid Dashboard. If present, this
   * indicates which of your business checking accounts will be credited or debited.
   */
  fundingAccountId: string | null;
  /** Plaid's unique identifier for a Plaid Ledger Balance. */
  ledgerId?: string | null;
  /**
   * Plaid's unique identifier for a transfer. This field is an empty string for Plaid Ledger Sweep
   * events.
   */
  transferId: string;
  /**
   * The ID of the origination account that this balance belongs to.
   *
   * @deprecated
   */
  originationAccountId: string | null;
  /**
   * The type of transfer. Valid values are `debit` or `credit`. A `debit` indicates a transfer of
   * money into the origination account; a `credit` indicates a transfer of money out of the
   * origination account. This field is omitted for Plaid Ledger Sweep events.
   */
  transferType?: OmittableTransferType;
  /**
   * The amount of the transfer (decimal string with two digits of precision e.g. "10.00"). This
   * field is omitted for Plaid Ledger Sweep events.
   */
  transferAmount?: string;
  /**
   * The failure reason if the event type for a transfer is `"failed"` or `"returned"`. Null value
   * otherwise.
   */
  failureReason: TransferFailure | null;
  /** Plaid's unique identifier for a sweep. */
  sweepId: string | null;
  /**
   * A signed amount of how much was `swept` or `return_swept` for this transfer (decimal string
   * with two digits of precision e.g. "-5.50").
   */
  sweepAmount: string | null;
  /**
   * A signed amount associated with this event (decimal string with two digits of precision e.g.
   * "10.00" or "-10.00").
   */
  eventAmount?: string | null;
  /**
   * Plaid's unique identifier for a refund. A non-null value indicates the event is for the
   * associated refund of the transfer.
   */
  refundId: string | null;
  /**
   * The Plaid client ID that is the originator of the transfer that this event applies to. Only
   * present if the transfer was created on behalf of another client as a third-party sender (TPS).
   */
  originatorClientId: string | null;
  /**
   * The `id` returned by the `/transfer/intent/create` endpoint, for transfers created via Transfer
   * UI. For transfers not created by Transfer UI, the value is `null`. This will currently only be
   * populated for RfP transfers.
   */
  intentId?: string | null;
  /** The fee amount deducted from the original transfer during a wire return, if applicable. */
  wireReturnFee?: string | null;
};

export const transferEventSchema: Schema<TransferEvent> = s.object<TransferEvent>({
  eventId: s.int(),
  timestamp: s.dateTime(),
  eventType: transferEventTypeSchema,
  accountId: s.optional(s.string()),
  fundingAccountId: s.nullable(s.string()),
  ledgerId: s.optionalNullable(s.string()),
  transferId: s.string(),
  originationAccountId: s.nullable(s.string()),
  transferType: s.optional(s.lazy(() => omittableTransferTypeSchema)),
  transferAmount: s.optional(s.string()),
  failureReason: s.nullable(s.lazy(() => transferFailureSchema)),
  sweepId: s.nullable(s.string()),
  sweepAmount: s.nullable(s.string()),
  eventAmount: s.optionalNullable(s.string()),
  refundId: s.nullable(s.string()),
  originatorClientId: s.nullable(s.string()),
  intentId: s.optionalNullable(s.string()),
  wireReturnFee: s.optionalNullable(s.string()),
  _keysMap: {
    eventId: "event_id",
    eventType: "event_type",
    accountId: "account_id",
    fundingAccountId: "funding_account_id",
    ledgerId: "ledger_id",
    transferId: "transfer_id",
    originationAccountId: "origination_account_id",
    transferType: "transfer_type",
    transferAmount: "transfer_amount",
    failureReason: "failure_reason",
    sweepId: "sweep_id",
    sweepAmount: "sweep_amount",
    eventAmount: "event_amount",
    refundId: "refund_id",
    originatorClientId: "originator_client_id",
    intentId: "intent_id",
    wireReturnFee: "wire_return_fee",
  },
});
