import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when an individual screening status has changed, which can occur manually via the dashboard
 * or during ongoing monitoring.
 */
export type ScreeningStatusUpdatedWebhook = {
  /** `SCREENING` */
  webhookType: string;
  /** `STATUS_UPDATED` */
  webhookCode: string;
  /** The ID of the associated screening. */
  screeningId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const screeningStatusUpdatedWebhookSchema: Schema<ScreeningStatusUpdatedWebhook> =
  s.object<ScreeningStatusUpdatedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    screeningId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      screeningId: "screening_id",
    },
  });
