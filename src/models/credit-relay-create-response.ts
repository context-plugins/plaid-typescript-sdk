import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditRelayCreateResponse = {
  relayToken: string;
  requestId: string;
};

export const creditRelayCreateResponseSchema: Schema<CreditRelayCreateResponse> =
  s.object<CreditRelayCreateResponse>({
    relayToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      relayToken: "relay_token",
      requestId: "request_id",
    },
  });
