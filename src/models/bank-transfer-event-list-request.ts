import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankTransferEventListBankTransferTypeSchema,
  type BankTransferEventListBankTransferType,
} from "./bank-transfer-event-list-bank-transfer-type.js";
import {
  bankTransferEventListDirectionSchema,
  type BankTransferEventListDirection,
} from "./bank-transfer-event-list-direction.js";
import { bankTransferEventTypeSchema, type BankTransferEventType } from "./bank-transfer-event-type.js";

export type BankTransferEventListRequest = {
  clientId?: string;
  secret?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  bankTransferId?: string | null;
  accountId?: string | null;
  bankTransferType?: BankTransferEventListBankTransferType | null;
  eventTypes?: BankTransferEventType[];
  count?: number | null;
  offset?: number | null;
  originationAccountId?: string | null;
  direction?: BankTransferEventListDirection | null;
};

export const bankTransferEventListRequestSchema: Schema<BankTransferEventListRequest> =
  s.object<BankTransferEventListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.optionalNullable(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
    bankTransferId: s.optionalNullable(s.string()),
    accountId: s.optionalNullable(s.string()),
    bankTransferType: s.optionalNullable(s.lazy(() => bankTransferEventListBankTransferTypeSchema)),
    eventTypes: s.optional(s.array(s.lazy(() => bankTransferEventTypeSchema))),
    count: s.optionalNullable(s.number()),
    offset: s.optionalNullable(s.number()),
    originationAccountId: s.optionalNullable(s.string()),
    direction: s.optionalNullable(s.lazy(() => bankTransferEventListDirectionSchema)),
    _keysMap: {
      clientId: "client_id",
      startDate: "start_date",
      endDate: "end_date",
      bankTransferId: "bank_transfer_id",
      accountId: "account_id",
      bankTransferType: "bank_transfer_type",
      eventTypes: "event_types",
      originationAccountId: "origination_account_id",
    },
  });
