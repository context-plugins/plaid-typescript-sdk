import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HostedLinkDeliveryMethod = {
  Sms: "sms",
  Email: "email",
} as const;
export type HostedLinkDeliveryMethod =
  | (typeof HostedLinkDeliveryMethod)[keyof typeof HostedLinkDeliveryMethod]
  | (string & {});

export const hostedLinkDeliveryMethodSchema: EnumSchema<HostedLinkDeliveryMethod> =
  s.enumOf<HostedLinkDeliveryMethod>(HostedLinkDeliveryMethod);
