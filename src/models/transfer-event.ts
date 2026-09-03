import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { omittableTransferTypeSchema, type OmittableTransferType } from "./omittable-transfer-type.js";
import { transferEventTypeSchema, type TransferEventType } from "./transfer-event-type.js";
import { transferFailureSchema, type TransferFailure } from "./transfer-failure.js";

export type TransferEvent = {
  eventId: number;
  timestamp: Date;
  eventType: TransferEventType;
  accountId?: string;
  fundingAccountId: string | null;
  ledgerId?: string | null;
  transferId: string;
  originationAccountId: string | null;
  transferType?: OmittableTransferType;
  transferAmount?: string;
  failureReason: TransferFailure | null;
  sweepId: string | null;
  sweepAmount: string | null;
  eventAmount?: string | null;
  refundId: string | null;
  originatorClientId: string | null;
  intentId?: string | null;
  wireReturnFee?: string | null;
};

export const transferEventSchema: Schema<TransferEvent> = s.object<TransferEvent>({
  eventId: s.number(),
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
