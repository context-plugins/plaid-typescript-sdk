import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkDeliveryOptionsSchema, type LinkDeliveryOptions } from "./link-delivery-options.js";

export type LinkDeliveryCreateRequest = {
  clientId?: string;
  secret?: string;
  linkToken: string;
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
