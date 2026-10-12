import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired when a partner insights report has failed to generate */
export type CraPartnerInsightsErrorWebhook = {
  /** `CRA_INSIGHTS` */
  webhookType: string;
  /** `PARTNER_INSIGHTS_ERROR` */
  webhookCode: string;
  /** The `user_id` corresponding to the user the webhook has fired for. */
  userId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const craPartnerInsightsErrorWebhookSchema: Schema<CraPartnerInsightsErrorWebhook> =
  s.object<CraPartnerInsightsErrorWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    userId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      userId: "user_id",
    },
  });
