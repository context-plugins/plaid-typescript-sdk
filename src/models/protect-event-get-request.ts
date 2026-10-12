import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request object for /protect/event/get */
export type ProtectEventGetRequest = {
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
  /** The event ID to retrieve information for. */
  eventId: string;
};

export const protectEventGetRequestSchema: Schema<ProtectEventGetRequest> = s.object<ProtectEventGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  eventId: s.string(),
  _keysMap: {
    clientId: "client_id",
    eventId: "event_id",
  },
});
