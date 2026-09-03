import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type InstitutionStatusAlertWebhook = {
  webhookType: string;
  webhookCode: string;
  institutionId: string;
  institutionOverallSuccessRate: number;
  environment: WebhookEnvironmentValues;
};

export const institutionStatusAlertWebhookSchema: Schema<InstitutionStatusAlertWebhook> =
  s.object<InstitutionStatusAlertWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    institutionId: s.string(),
    institutionOverallSuccessRate: s.number(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      institutionId: "institution_id",
      institutionOverallSuccessRate: "institution_overall_success_rate",
    },
  });
