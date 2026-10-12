import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the delivery of the Hosted Link to the user */
export const LinkDeliveryWebhookDeliveryStatus = {
  Success: "SUCCESS",
  Failure: "FAILURE",
} as const;
export type LinkDeliveryWebhookDeliveryStatus =
  | (typeof LinkDeliveryWebhookDeliveryStatus)[keyof typeof LinkDeliveryWebhookDeliveryStatus]
  | (string & {});

export const linkDeliveryWebhookDeliveryStatusSchema: EnumSchema<LinkDeliveryWebhookDeliveryStatus> =
  s.enumOf<LinkDeliveryWebhookDeliveryStatus>(LinkDeliveryWebhookDeliveryStatus);
