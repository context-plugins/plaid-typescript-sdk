import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/event/sync` */
export type TransferEventSyncRequest = {
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
  /** The maximum number of transfer events to return. @default 100 */
  count?: number | null;
};

export const transferEventSyncRequestSchema: Schema<TransferEventSyncRequest> =
  s.object<TransferEventSyncRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    afterId: s.int(),
    count: s.defaulted(s.nullable(s.int()), 100),
    _keysMap: {
      clientId: "client_id",
      afterId: "after_id",
    },
  });
