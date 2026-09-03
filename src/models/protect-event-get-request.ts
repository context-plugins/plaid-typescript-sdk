import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtectEventGetRequest = {
  clientId?: string;
  secret?: string;
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
