import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ledgerEventSourceTypeSchema, type LedgerEventSourceType } from "./ledger-event-source-type.js";

/** Defines the request schema for `/transfer/ledger/event/list` */
export type TransferLedgerEventListRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Filter transfer events to only those with the specified originator client. (This field is
   * specifically for resellers. Caller's client ID will be used if this field is not specified.)
   */
  originatorClientId?: string | null;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * The start created datetime of transfers to list. This should be in RFC 3339 format (i.e.
   * 2019-12-06T22:35:49Z)
   */
  startDate?: Date | null;
  /**
   * The end created datetime of transfers to list. This should be in RFC 3339 format (i.e.
   * 2019-12-06T22:35:49Z)
   */
  endDate?: Date | null;
  /** Plaid's unique identifier for a Plaid Ledger Balance. */
  ledgerId?: string | null;
  /** Plaid's unique identifier for the ledger event. */
  ledgerEventId?: string | null;
  /**
   * Source of the ledger event.
   *
   * `"TRANSFER"` - The source of the ledger event is a transfer `"SWEEP"` - The source of the
   * ledger event is a sweep `"REFUND"` - The source of the ledger event is a refund
   */
  sourceType?: LedgerEventSourceType | null;
  /** Plaid's unique identifier for a transfer, sweep, or refund. */
  sourceId?: string | null;
  /**
   * The maximum number of transfer events to return. If the number of events matching the above
   * parameters is greater than `count`, the most recent events will be returned.
   *
   * @default 25
   */
  count?: number | null;
  /**
   * The offset into the list of transfer events. When `count`=25 and `offset`=0, the first 25
   * events will be returned. When `count`=25 and `offset`=25, the next 25 events will be returned.
   *
   * @default 0
   */
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
    count: s.defaulted(s.nullable(s.int()), 25),
    offset: s.defaulted(s.nullable(s.int()), 0),
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
