import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkDeliveryMetadataSchema, type LinkDeliveryMetadata } from "./link-delivery-metadata.js";

/** Webhook indicating that the status of the delivery of the Hosted Link session to a user */
export type LinkUserDeliveryStatusWebhook = {
  /** `LINK_DELIVERY` */
  webhookType: string;
  /** `DELIVERY_STATUS` */
  webhookCode: string;
  /** The ID of the Hosted Link session. */
  linkDeliverySessionId: string;
  /** Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format. */
  timestamp: string;
  /** Information related to the delivery of the link session to users */
  linkDeliveryMetadata: LinkDeliveryMetadata;
};

export const linkUserDeliveryStatusWebhookSchema: Schema<LinkUserDeliveryStatusWebhook> =
  s.object<LinkUserDeliveryStatusWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    linkDeliverySessionId: s.string(),
    timestamp: s.string(),
    linkDeliveryMetadata: linkDeliveryMetadataSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      linkDeliverySessionId: "link_delivery_session_id",
      linkDeliveryMetadata: "link_delivery_metadata",
    },
  });
