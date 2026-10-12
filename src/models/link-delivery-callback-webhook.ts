import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { linkCallbackMetadataSchema, type LinkCallbackMetadata } from "./link-callback-metadata.js";

/**
 * Webhook containing metadata proxied over from Link callback e.g. `onEvent`, `onExit`,
 * `onSuccess`.
 */
export type LinkDeliveryCallbackWebhook = {
  /** `LINK_DELIVERY` */
  webhookType: string;
  /** `LINK_CALLBACK` */
  webhookCode: string;
  /** The ID of the Hosted Link session. */
  linkDeliverySessionId: string;
  /** Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format. */
  timestamp: string;
  /**
   * Errors are identified by `error_code` and categorized by `error_type`. Use these in preference
   * to HTTP status codes to identify and handle specific errors. HTTP status codes are set and
   * provide the broadest categorization of errors: 4xx codes are for developer- or user-related
   * errors, and 5xx codes are for Plaid-related errors, and the status will be 2xx in non-error
   * cases. An Item with a non-`null` error object will only be part of an API response when calling
   * `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has
   * occurred; if an error has occurred, an error code will be returned instead.
   */
  error?: Error | null;
  /** Information related to the callback from the Hosted Link session. */
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
