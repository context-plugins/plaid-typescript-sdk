import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LinkDeliveryWebhookCommunicationMethod = {
  Sms: "SMS",
  Email: "EMAIL",
} as const;
export type LinkDeliveryWebhookCommunicationMethod =
  | (typeof LinkDeliveryWebhookCommunicationMethod)[keyof typeof LinkDeliveryWebhookCommunicationMethod]
  | (string & {});

export const linkDeliveryWebhookCommunicationMethodSchema: EnumSchema<LinkDeliveryWebhookCommunicationMethod> =
  s.enumOf<LinkDeliveryWebhookCommunicationMethod>(LinkDeliveryWebhookCommunicationMethod);
