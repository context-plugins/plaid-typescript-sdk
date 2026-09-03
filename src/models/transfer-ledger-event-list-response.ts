import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferLedgerEventSchema, type TransferLedgerEvent } from "./transfer-ledger-event.js";

export type TransferLedgerEventListResponse = {
  ledgerEvents: TransferLedgerEvent[];
  hasMore: boolean;
  requestId: string;
};

export const transferLedgerEventListResponseSchema: Schema<TransferLedgerEventListResponse> =
  s.object<TransferLedgerEventListResponse>({
    ledgerEvents: s.array(s.lazy(() => transferLedgerEventSchema)),
    hasMore: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      ledgerEvents: "ledger_events",
      hasMore: "has_more",
      requestId: "request_id",
    },
  });
