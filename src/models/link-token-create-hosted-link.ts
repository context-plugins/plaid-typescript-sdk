import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  hostedLinkDeliveryMethodSchema,
  type HostedLinkDeliveryMethod,
} from "./hosted-link-delivery-method.js";

/**
 * Configuration parameters for Hosted Link. To enable the session for Hosted Link, send this object
 * in the request. It can be empty.
 */
export type LinkTokenCreateHostedLink = {
  /**
   * How Plaid should deliver the Plaid Link session to the customer. Only available to customers
   * enabled for Link Delivery (beta). To request Link Delivery access, contact your account
   * manager. 'sms' will deliver via SMS. Must pass `user.phone_number`. 'email' will deliver via
   * email. Must pass `user.email_address`. In the Sandbox environment, this field will be ignored;
   * use the Production environment to test Link Delivery instead.
   */
  deliveryMethod?: HostedLinkDeliveryMethod;
  /**
   * URI that Hosted Link will redirect to upon completion of the Link flow. This will only occur in
   * Hosted Link sessions, not in other implementation methods.
   */
  completionRedirectUri?: string;
  /**
   * How many seconds the link will be valid for. Must be positive. Cannot be longer than 21 days.
   * The default lifetime is 7 days for links delivered by email, 1 day for links delivered via SMS,
   * and 30 minutes for links not sent via Plaid Link delivery. This parameter will override the
   * value of all three link types.
   */
  urlLifetimeSeconds?: number;
  /**
   * This indicates whether the client is opening Hosted Link in a mobile app in an
   * `AsWebAuthenticationSession` or Chrome custom tab.
   *
   * @default false
   */
  isMobileApp?: boolean;
};

export const linkTokenCreateHostedLinkSchema: Schema<LinkTokenCreateHostedLink> =
  s.object<LinkTokenCreateHostedLink>({
    deliveryMethod: s.optional(s.lazy(() => hostedLinkDeliveryMethodSchema)),
    completionRedirectUri: s.optional(s.string()),
    urlLifetimeSeconds: s.optional(s.int()),
    isMobileApp: s.defaulted(s.boolean(), false),
    _keysMap: {
      deliveryMethod: "delivery_method",
      completionRedirectUri: "completion_redirect_uri",
      urlLifetimeSeconds: "url_lifetime_seconds",
      isMobileApp: "is_mobile_app",
    },
  });
