import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferDirectionSchema, type BankTransferDirection } from "./bank-transfer-direction.js";
import { bankTransferEventTypeSchema, type BankTransferEventType } from "./bank-transfer-event-type.js";
import { bankTransferFailureSchema, type BankTransferFailure } from "./bank-transfer-failure.js";
import { bankTransferTypeSchema, type BankTransferType } from "./bank-transfer-type.js";
import { receiverDetailsSchema, type ReceiverDetails } from "./receiver-details.js";

/** Represents an event in the Bank Transfers API. */
export type BankTransferEvent = {
  /** Plaid's unique identifier for this event. IDs are sequential unsigned 64-bit integers. */
  eventId: number;
  /** The datetime when this event occurred. This will be of the form `2006-01-02T15:04:05Z`. */
  timestamp: Date;
  /**
   * The type of event that this bank transfer represents.
   *
   * `pending`: A new transfer was created; it is in the pending state.
   *
   * `cancelled`: The transfer was cancelled by the client.
   *
   * `failed`: The transfer failed, no funds were moved.
   *
   * `posted`: The transfer has been successfully submitted to the payment network.
   *
   * `reversed`: A posted transfer was reversed.
   */
  eventType: BankTransferEventType;
  /** The account ID associated with the bank transfer. */
  accountId: string;
  /** Plaid's unique identifier for a bank transfer. */
  bankTransferId: string;
  /** The ID of the origination account that this balance belongs to. */
  originationAccountId: string | null;
  /**
   * The type of bank transfer. This will be either `debit` or `credit`. A `debit` indicates a
   * transfer of money into the origination account; a `credit` indicates a transfer of money out of
   * the origination account.
   */
  bankTransferType: BankTransferType;
  /** The bank transfer amount. */
  bankTransferAmount: string;
  /** The currency of the bank transfer amount. */
  bankTransferIsoCurrencyCode: string;
  /**
   * The failure reason if the type of this transfer is `"failed"` or `"reversed"`. Null value
   * otherwise.
   */
  failureReason: BankTransferFailure | null;
  /**
   * Indicates the direction of the transfer: `outbound` for API-initiated transfers, or `inbound`
   * for payments received by the FBO account.
   */
  direction: BankTransferDirection | null;
  /** Additional details for receiver events. Currently always `null`. */
  receiverDetails: ReceiverDetails | null;
};

export const bankTransferEventSchema: Schema<BankTransferEvent> = s.object<BankTransferEvent>({
  eventId: s.int(),
  timestamp: s.dateTime(),
  eventType: bankTransferEventTypeSchema,
  accountId: s.string(),
  bankTransferId: s.string(),
  originationAccountId: s.nullable(s.string()),
  bankTransferType: bankTransferTypeSchema,
  bankTransferAmount: s.string(),
  bankTransferIsoCurrencyCode: s.string(),
  failureReason: s.nullable(s.lazy(() => bankTransferFailureSchema)),
  direction: s.nullable(s.lazy(() => bankTransferDirectionSchema)),
  receiverDetails: s.nullable(s.lazy(() => receiverDetailsSchema)),
  _keysMap: {
    eventId: "event_id",
    eventType: "event_type",
    accountId: "account_id",
    bankTransferId: "bank_transfer_id",
    originationAccountId: "origination_account_id",
    bankTransferType: "bank_transfer_type",
    bankTransferAmount: "bank_transfer_amount",
    bankTransferIsoCurrencyCode: "bank_transfer_iso_currency_code",
    failureReason: "failure_reason",
    receiverDetails: "receiver_details",
  },
});
