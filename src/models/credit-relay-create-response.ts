import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** CreditRelayCreateResponse defines the response schema for `/credit/relay/create` */
export type CreditRelayCreateResponse = {
  /**
   * A token that can be shared with a third party to allow them to access the Asset Report. This
   * token should be stored securely.
   */
  relayToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
