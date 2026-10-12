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

/** Information related to the delivery of the link session to users */
export type LinkDeliveryMetadata = {
  /** The communication method used to deliver the Hosted Link session */
  communicationMethod?: LinkDeliveryWebhookCommunicationMethod;
  /** The status of the delivery of the Hosted Link to the user */
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
