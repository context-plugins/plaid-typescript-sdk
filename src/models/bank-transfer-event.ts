import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferDirectionSchema, type BankTransferDirection } from "./bank-transfer-direction.js";
import { bankTransferEventTypeSchema, type BankTransferEventType } from "./bank-transfer-event-type.js";
import { bankTransferFailureSchema, type BankTransferFailure } from "./bank-transfer-failure.js";
import { bankTransferTypeSchema, type BankTransferType } from "./bank-transfer-type.js";
import { receiverDetailsSchema, type ReceiverDetails } from "./receiver-details.js";

export type BankTransferEvent = {
  eventId: number;
  timestamp: Date;
  eventType: BankTransferEventType;
  accountId: string;
  bankTransferId: string;
  originationAccountId: string | null;
  bankTransferType: BankTransferType;
  bankTransferAmount: string;
  bankTransferIsoCurrencyCode: string;
  failureReason: BankTransferFailure | null;
  direction: BankTransferDirection | null;
  receiverDetails: ReceiverDetails | null;
};

export const bankTransferEventSchema: Schema<BankTransferEvent> = s.object<BankTransferEvent>({
  eventId: s.number(),
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
