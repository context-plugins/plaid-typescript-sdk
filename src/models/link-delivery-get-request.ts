import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** LinkDeliveryGetRequest defines the request schema for `/link_delivery/get` */
export type LinkDeliveryGetRequest = {
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
  /** The ID for the Hosted Link session from a previous invocation of `/link_delivery/create`. */
  linkDeliverySessionId: string;
};

export const linkDeliveryGetRequestSchema: Schema<LinkDeliveryGetRequest> = s.object<LinkDeliveryGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  linkDeliverySessionId: s.string(),
  _keysMap: {
    clientId: "client_id",
    linkDeliverySessionId: "link_delivery_session_id",
  },
});
