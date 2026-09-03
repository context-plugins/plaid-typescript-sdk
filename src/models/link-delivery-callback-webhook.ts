import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { linkCallbackMetadataSchema, type LinkCallbackMetadata } from "./link-callback-metadata.js";

export type LinkDeliveryCallbackWebhook = {
  webhookType: string;
  webhookCode: string;
  linkDeliverySessionId: string;
  timestamp: string;
  error?: Error | null;
  linkCallbackMetadata: LinkCallbackMetadata;
};

export const linkDeliveryCallbackWebhookSchema: Schema<LinkDeliveryCallbackWebhook> =
  s.object<LinkDeliveryCallbackWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    linkDeliverySessionId: s.string(),
    timestamp: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    linkCallbackMetadata: linkCallbackMetadataSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      linkDeliverySessionId: "link_delivery_session_id",
      linkCallbackMetadata: "link_callback_metadata",
    },
  });
