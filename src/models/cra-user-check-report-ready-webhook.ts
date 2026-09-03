import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type CraUserCheckReportReadyWebhook = {
  webhookType: string;
  webhookCode: string;
  userId: string;
  successfulProducts?: Products[];
  failedProducts?: Products[];
  itemIds?: string[] | null;
  environment: WebhookEnvironmentValues;
};

export const craUserCheckReportReadyWebhookSchema: Schema<CraUserCheckReportReadyWebhook> =
  s.object<CraUserCheckReportReadyWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    successfulProducts: s.optional(s.array(s.lazy(() => productsSchema))),
    failedProducts: s.optional(s.array(s.lazy(() => productsSchema))),
    itemIds: s.optionalNullable(s.array(s.string())),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
      successfulProducts: "successful_products",
      failedProducts: "failed_products",
      itemIds: "item_ids",
    },
  });
