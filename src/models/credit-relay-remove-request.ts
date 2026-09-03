import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditRelayRemoveRequest = {
  clientId?: string;
  secret?: string;
  relayToken: string;
};

export const creditRelayRemoveRequestSchema: Schema<CreditRelayRemoveRequest> =
  s.object<CreditRelayRemoveRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    relayToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      relayToken: "relay_token",
    },
  });
