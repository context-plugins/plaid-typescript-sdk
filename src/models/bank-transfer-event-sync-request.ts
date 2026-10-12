import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/bank_transfer/event/sync` */
export type BankTransferEventSyncRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The latest (largest) `event_id` fetched via the sync endpoint, or 0 initially. */
  afterId: number;
  /** The maximum number of bank transfer events to return. @default 25 */
  count?: number | null;
};

export const bankTransferEventSyncRequestSchema: Schema<BankTransferEventSyncRequest> =
  s.object<BankTransferEventSyncRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    afterId: s.int(),
    count: s.defaulted(s.nullable(s.int()), 25),
    _keysMap: {
      clientId: "client_id",
      afterId: "after_id",
    },
  });
