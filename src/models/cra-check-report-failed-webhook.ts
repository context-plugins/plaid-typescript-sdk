import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkReportRepairableItemSchema,
  type CheckReportRepairableItem,
} from "./check-report-repairable-item.js";
import { errorSchema, type Error } from "./error.js";
import { productsSchema, type Products } from "./products.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type CraCheckReportFailedWebhook = {
  webhookType: string;
  webhookCode: string;
  userId: string;
  error?: Error | null;
  repairableItems?: CheckReportRepairableItem[];
  failedProducts?: Products[];
  itemIds?: string[] | null;
  environment: WebhookEnvironmentValues;
};

export const craCheckReportFailedWebhookSchema: Schema<CraCheckReportFailedWebhook> =
  s.object<CraCheckReportFailedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    repairableItems: s.optional(s.array(s.lazy(() => checkReportRepairableItemSchema))),
    failedProducts: s.optional(s.array(s.lazy(() => productsSchema))),
    itemIds: s.optionalNullable(s.array(s.string())),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
      repairableItems: "repairable_items",
      failedProducts: "failed_products",
      itemIds: "item_ids",
    },
  });
