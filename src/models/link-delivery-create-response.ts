import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkDeliveryCreateResponse = {
  linkDeliveryUrl: string;
  linkDeliverySessionId: string;
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
