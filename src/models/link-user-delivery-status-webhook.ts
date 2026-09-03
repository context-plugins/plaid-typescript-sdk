import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkDeliveryMetadataSchema, type LinkDeliveryMetadata } from "./link-delivery-metadata.js";

export type LinkUserDeliveryStatusWebhook = {
  webhookType: string;
  webhookCode: string;
  linkDeliverySessionId: string;
  timestamp: string;
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
