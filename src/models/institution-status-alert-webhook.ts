import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired when institution status meets the conditions configured in the developer dashboard. */
export type InstitutionStatusAlertWebhook = {
  /** `DASHBOARD_CONFIGURED_ALERT` */
  webhookType: string;
  /** `INSTITUTION_STATUS_ALERT_TRIGGERED` */
  webhookCode: string;
  /** The ID of the associated institution. */
  institutionId: string;
  /** The global success rate of the institution, calculated based on item add health. */
  institutionOverallSuccessRate: number;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const institutionStatusAlertWebhookSchema: Schema<InstitutionStatusAlertWebhook> =
  s.object<InstitutionStatusAlertWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    institutionId: s.string(),
    institutionOverallSuccessRate: s.float64(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      institutionId: "institution_id",
      institutionOverallSuccessRate: "institution_overall_success_rate",
    },
  });
