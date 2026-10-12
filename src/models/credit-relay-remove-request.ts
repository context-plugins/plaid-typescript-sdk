import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** CreditRelayRemoveRequest defines the request schema for `/credit/relay/remove` */
export type CreditRelayRemoveRequest = {
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
  /** The `relay_token` you would like to revoke. */
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
