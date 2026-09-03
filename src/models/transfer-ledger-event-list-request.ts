import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ledgerEventSourceTypeSchema, type LedgerEventSourceType } from "./ledger-event-source-type.js";

export type TransferLedgerEventListRequest = {
  clientId?: string;
  originatorClientId?: string | null;
  secret?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  ledgerId?: string | null;
  ledgerEventId?: string | null;
  sourceType?: LedgerEventSourceType | null;
  sourceId?: string | null;
  count?: number | null;
  offset?: number | null;
};

export const transferLedgerEventListRequestSchema: Schema<TransferLedgerEventListRequest> =
  s.object<TransferLedgerEventListRequest>({
    clientId: s.optional(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    secret: s.optional(s.string()),
    startDate: s.optionalNullable(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
    ledgerId: s.optionalNullable(s.string()),
    ledgerEventId: s.optionalNullable(s.string()),
    sourceType: s.optionalNullable(s.lazy(() => ledgerEventSourceTypeSchema)),
    sourceId: s.optionalNullable(s.string()),
    count: s.optionalNullable(s.number()),
    offset: s.optionalNullable(s.number()),
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      startDate: "start_date",
      endDate: "end_date",
      ledgerId: "ledger_id",
      ledgerEventId: "ledger_event_id",
      sourceType: "source_type",
      sourceId: "source_id",
    },
  });
