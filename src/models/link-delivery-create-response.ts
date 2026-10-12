import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** LinkDeliveryCreateResponse defines the response schema for `/link_delivery/create` */
export type LinkDeliveryCreateResponse = {
  /**
   * The URL to the Hosted Link session, which will be delivered by the specified delivery method.
   */
  linkDeliveryUrl: string;
  /**
   * The ID for the Hosted Link session. Same as the `link_token` string excluding the "link-{env}-"
   * prefix.
   */
  linkDeliverySessionId: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const linkDeliveryCreateResponseSchema: Schema<LinkDeliveryCreateResponse> =
  s.object<LinkDeliveryCreateResponse>({
    linkDeliveryUrl: s.string(),
    linkDeliverySessionId: s.string(),
    requestId: s.string(),
    _keysMap: {
      linkDeliveryUrl: "link_delivery_url",
      linkDeliverySessionId: "link_delivery_session_id",
      requestId: "request_id",
    },
  });
