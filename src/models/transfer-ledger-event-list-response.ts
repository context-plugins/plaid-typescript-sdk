import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferLedgerEventSchema, type TransferLedgerEvent } from "./transfer-ledger-event.js";

/** Defines the response schema for `/transfer/ledger/event/list` */
export type TransferLedgerEventListResponse = {
  ledgerEvents: TransferLedgerEvent[];
  /**
   * Whether there are more events to be pulled from the endpoint that have not already been
   * returned
   */
  hasMore: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
