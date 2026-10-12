import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkDeliveryOptionsSchema, type LinkDeliveryOptions } from "./link-delivery-options.js";

/** LinkDeliveryCreateRequest defines the request schema for `/link_delivery/create` */
export type LinkDeliveryCreateRequest = {
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
  /** A `link_token` from a previous invocation of `/link/token/create`. */
  linkToken: string;
  /** Optional metadata related to the Hosted Link session */
  options?: LinkDeliveryOptions;
};

export const linkDeliveryCreateRequestSchema: Schema<LinkDeliveryCreateRequest> =
  s.object<LinkDeliveryCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    linkToken: s.string(),
    options: s.optional(s.lazy(() => linkDeliveryOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      linkToken: "link_token",
    },
  });
