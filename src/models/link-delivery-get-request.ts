import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkDeliveryGetRequest = {
  clientId?: string;
  secret?: string;
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
