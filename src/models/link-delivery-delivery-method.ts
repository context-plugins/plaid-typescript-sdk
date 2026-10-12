import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The delivery method to be used to deliver the Hosted Link session URL.
 *
 * `SMS`: The URL will be delivered through SMS
 *
 * `EMAIL`: The URL will be delivered through email
 */
export const LinkDeliveryDeliveryMethod = {
  Sms: "SMS",
  Email: "EMAIL",
} as const;
export type LinkDeliveryDeliveryMethod =
  | (typeof LinkDeliveryDeliveryMethod)[keyof typeof LinkDeliveryDeliveryMethod]
  | (string & {});

export const linkDeliveryDeliveryMethodSchema: EnumSchema<LinkDeliveryDeliveryMethod> =
  s.enumOf<LinkDeliveryDeliveryMethod>(LinkDeliveryDeliveryMethod);
