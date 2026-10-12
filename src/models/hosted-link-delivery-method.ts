import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How Plaid should deliver the Plaid Link session to the customer. Only available to customers
 * enabled for Link Delivery (beta). To request Link Delivery access, contact your account manager.
 * 'sms' will deliver via SMS. Must pass `user.phone_number`. 'email' will deliver via email. Must
 * pass `user.email_address`. In the Sandbox environment, this field will be ignored; use the
 * Production environment to test Link Delivery instead.
 */
export const HostedLinkDeliveryMethod = {
  Sms: "sms",
  Email: "email",
} as const;
export type HostedLinkDeliveryMethod =
  | (typeof HostedLinkDeliveryMethod)[keyof typeof HostedLinkDeliveryMethod]
  | (string & {});

export const hostedLinkDeliveryMethodSchema: EnumSchema<HostedLinkDeliveryMethod> =
  s.enumOf<HostedLinkDeliveryMethod>(HostedLinkDeliveryMethod);
