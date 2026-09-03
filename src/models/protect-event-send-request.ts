import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectEventSchema, type ProtectEvent } from "./protect-event.js";

export type ProtectEventSendRequest = {
  clientId?: string;
  secret?: string;
  timestamp?: Date;
  event: ProtectEvent | null;
  protectSessionId?: string;
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
