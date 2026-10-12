import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectEventSchema, type ProtectEvent } from "./protect-event.js";

/** Request object for /protect/event/send */
export type ProtectEventSendRequest = {
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
  /**
   * Timestamp of the event. Might be the current moment or a time in the past. In [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g. `"2017-09-14T14:42:19.350Z"`
   */
  timestamp?: Date;
  /** Event data for Protect events. */
  event: ProtectEvent | null;
  /**
   * Protect Session ID should be provided for any event correlated with a frontend user session
   * started via the Protect SDK.
   */
  protectSessionId?: string;
  /** Whether this event should be scored with Trust Index. The default is false. */
  requestTrustIndex?: boolean;
};

export const protectEventSendRequestSchema: Schema<ProtectEventSendRequest> =
  s.object<ProtectEventSendRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    timestamp: s.optional(s.dateTime()),
    event: s.nullable(s.lazy(() => protectEventSchema)),
    protectSessionId: s.optional(s.string()),
    requestTrustIndex: s.optional(s.boolean()),
    _keysMap: {
      clientId: "client_id",
      protectSessionId: "protect_session_id",
      requestTrustIndex: "request_trust_index",
    },
  });
