import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type CraCheckReportReadyWebhook = {
  webhookType: string;
  webhookCode: string;
  userId: string;
  successfulProducts?: Products[] | null;
  failedProducts?: Products[] | null;
  itemIds?: string[] | null;
  environment: WebhookEnvironmentValues;
};

export const craCheckReportReadyWebhookSchema: Schema<CraCheckReportReadyWebhook> =
  s.object<CraCheckReportReadyWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    successfulProducts: s.optionalNullable(s.array(s.lazy(() => productsSchema))),
    failedProducts: s.optionalNullable(s.array(s.lazy(() => productsSchema))),
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
