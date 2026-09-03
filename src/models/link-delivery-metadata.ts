import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkDeliveryWebhookCommunicationMethodSchema,
  type LinkDeliveryWebhookCommunicationMethod,
} from "./link-delivery-webhook-communication-method.js";
import {
  linkDeliveryWebhookDeliveryStatusSchema,
  type LinkDeliveryWebhookDeliveryStatus,
} from "./link-delivery-webhook-delivery-status.js";

export type LinkDeliveryMetadata = {
  communicationMethod?: LinkDeliveryWebhookCommunicationMethod;
  deliveryStatus?: LinkDeliveryWebhookDeliveryStatus;
};

export const linkDeliveryMetadataSchema: Schema<LinkDeliveryMetadata> = s.object<LinkDeliveryMetadata>({
  communicationMethod: s.optional(s.lazy(() => linkDeliveryWebhookCommunicationMethodSchema)),
  deliveryStatus: s.optional(s.lazy(() => linkDeliveryWebhookDeliveryStatusSchema)),
  _keysMap: {
    communicationMethod: "communication_method",
    deliveryStatus: "delivery_status",
  },
});
