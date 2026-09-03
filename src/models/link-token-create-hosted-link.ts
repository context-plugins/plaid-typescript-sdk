import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  hostedLinkDeliveryMethodSchema,
  type HostedLinkDeliveryMethod,
} from "./hosted-link-delivery-method.js";

export type LinkTokenCreateHostedLink = {
  deliveryMethod?: HostedLinkDeliveryMethod;
  completionRedirectUri?: string;
  urlLifetimeSeconds?: number;
  isMobileApp?: boolean;
};

export const linkTokenCreateHostedLinkSchema: Schema<LinkTokenCreateHostedLink> =
  s.object<LinkTokenCreateHostedLink>({
    deliveryMethod: s.optional(s.lazy(() => hostedLinkDeliveryMethodSchema)),
    completionRedirectUri: s.optional(s.string()),
    urlLifetimeSeconds: s.optional(s.number()),
    isMobileApp: s.optional(s.boolean()),
    _keysMap: {
      deliveryMethod: "delivery_method",
      completionRedirectUri: "completion_redirect_uri",
      urlLifetimeSeconds: "url_lifetime_seconds",
      isMobileApp: "is_mobile_app",
    },
  });
