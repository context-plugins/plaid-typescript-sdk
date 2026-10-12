import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when Asset Report generation has failed. The resulting `error` will have an `error_type` of
 * `ASSET_REPORT_ERROR`.
 */
export type AssetsErrorWebhook = {
  /** `ASSETS` */
  webhookType: string;
  /** `ERROR` */
  webhookCode: string;
  /**
   * Errors are identified by `error_code` and categorized by `error_type`. Use these in preference
   * to HTTP status codes to identify and handle specific errors. HTTP status codes are set and
   * provide the broadest categorization of errors: 4xx codes are for developer- or user-related
   * errors, and 5xx codes are for Plaid-related errors, and the status will be 2xx in non-error
   * cases. An Item with a non-`null` error object will only be part of an API response when calling
   * `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has
   * occurred; if an error has occurred, an error code will be returned instead.
   */
  error: Error | null;
  /** The ID associated with the Asset Report. */
  assetReportId: string;
  /** The `user_id` corresponding to the User ID the webhook has fired for. */
  userId?: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const assetsErrorWebhookSchema: Schema<AssetsErrorWebhook> = s.object<AssetsErrorWebhook>({
  webhookType: s.string(),
  webhookCode: s.string(),
  error: s.nullable(s.lazy(() => errorSchema)),
  assetReportId: s.string(),
  userId: s.optional(s.string()),
  environment: webhookEnvironmentValuesSchema,
  _keysMap: {
    webhookType: "webhook_type",
    webhookCode: "webhook_code",
    assetReportId: "asset_report_id",
    userId: "user_id",
  },
});
