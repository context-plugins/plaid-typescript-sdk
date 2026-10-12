import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of Link callback event */
export const LinkDeliveryWebhookCallbackType = {
  OnSuccess: "ON_SUCCESS",
  OnEvent: "ON_EVENT",
  OnExit: "ON_EXIT",
} as const;
export type LinkDeliveryWebhookCallbackType =
  | (typeof LinkDeliveryWebhookCallbackType)[keyof typeof LinkDeliveryWebhookCallbackType]
  | (string & {});

export const linkDeliveryWebhookCallbackTypeSchema: EnumSchema<LinkDeliveryWebhookCallbackType> =
  s.enumOf<LinkDeliveryWebhookCallbackType>(LinkDeliveryWebhookCallbackType);
