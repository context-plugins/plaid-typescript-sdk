import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetReportTypeSchema, type AssetReportType } from "./asset-report-type.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type AssetsProductReadyWebhook = {
  webhookType: string;
  webhookCode: string;
  assetReportId: string;
  userId?: string;
  reportType?: AssetReportType;
  environment: WebhookEnvironmentValues;
};

export const assetsProductReadyWebhookSchema: Schema<AssetsProductReadyWebhook> =
  s.object<AssetsProductReadyWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    assetReportId: s.string(),
    userId: s.optional(s.string()),
    reportType: s.optional(s.lazy(() => assetReportTypeSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      assetReportId: "asset_report_id",
      userId: "user_id",
      reportType: "report_type",
    },
  });
