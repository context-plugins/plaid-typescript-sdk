import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when an `ACCESS_NOT_GRANTED` error is hit for Auth. The error can be resolved by putting
 * the user through update mode with `auth` in the `products` array, as well as through the limited
 * beta for update mode Authentication product validations.
 */
export type ProductPermissionsRequiredAuthWebhook = {
  /** `AUTH` */
  webhookType: string;
  /** `PRODUCT_PERMISSIONS_REQUIRED` */
  webhookCode: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const productPermissionsRequiredAuthWebhookSchema: Schema<ProductPermissionsRequiredAuthWebhook> =
  s.object<ProductPermissionsRequiredAuthWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
    },
  });
