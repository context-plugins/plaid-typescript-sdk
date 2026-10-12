import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetReportTypeSchema, type AssetReportType } from "./asset-report-type.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when the Asset Report has been generated and `/asset_report/get` is ready to be called. If
 * you attempt to retrieve an Asset Report before this webhook has fired, you'll receive a response
 * with the HTTP status code 400 and a Plaid error code of `PRODUCT_NOT_READY`.
 */
export type AssetsProductReadyWebhook = {
  /** `ASSETS` */
  webhookType: string;
  /** `PRODUCT_READY` */
  webhookCode: string;
  /** The `asset_report_id` corresponding to the Asset Report the webhook has fired for. */
  assetReportId: string;
  /** The `user_id` corresponding to the User ID the webhook has fired for. */
  userId?: string;
  /**
   * Indicates either a Fast Asset Report, which will contain only current identity and balance
   * information, or a Full Asset Report, which will also contain historical balance information and
   * transaction data.
   */
  reportType?: AssetReportType;
  /** The Plaid environment the webhook was sent from */
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
