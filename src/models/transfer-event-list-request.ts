import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferEventListTransferTypeSchema,
  type TransferEventListTransferType,
} from "./transfer-event-list-transfer-type.js";
import { transferEventTypeSchema, type TransferEventType } from "./transfer-event-type.js";

export type TransferEventListRequest = {
  clientId?: string;
  secret?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  transferId?: string | null;
  accountId?: string | null;
  transferType?: TransferEventListTransferType | null;
  eventTypes?: TransferEventType[];
  sweepId?: string;
  count?: number | null;
  offset?: number | null;
  originationAccountId?: string | null;
  originatorClientId?: string | null;
  fundingAccountId?: string | null;
};

export const transferEventListRequestSchema: Schema<TransferEventListRequest> =
  s.object<TransferEventListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.optionalNullable(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
    transferId: s.optionalNullable(s.string()),
    accountId: s.optionalNullable(s.string()),
    transferType: s.optionalNullable(s.lazy(() => transferEventListTransferTypeSchema)),
    eventTypes: s.optional(s.array(s.lazy(() => transferEventTypeSchema))),
    sweepId: s.optional(s.string()),
    count: s.optionalNullable(s.number()),
    offset: s.optionalNullable(s.number()),
    originationAccountId: s.optionalNullable(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    fundingAccountId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      startDate: "start_date",
      endDate: "end_date",
      transferId: "transfer_id",
      accountId: "account_id",
      transferType: "transfer_type",
      eventTypes: "event_types",
      sweepId: "sweep_id",
      originationAccountId: "origination_account_id",
      originatorClientId: "originator_client_id",
      fundingAccountId: "funding_account_id",
    },
  });
