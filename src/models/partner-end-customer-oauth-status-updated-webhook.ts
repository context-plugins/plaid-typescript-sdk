import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerEndCustomerOAuthStatusUpdatedValuesSchema,
  type PartnerEndCustomerOAuthStatusUpdatedValues,
} from "./partner-end-customer-oauth-status-updated-values.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type PartnerEndCustomerOAuthStatusUpdatedWebhook = {
  webhookType: string;
  webhookCode: string;
  endCustomerClientId: string;
  environment: WebhookEnvironmentValues;
  institutionId: string;
  institutionName: string;
  status: PartnerEndCustomerOAuthStatusUpdatedValues;
};

export const partnerEndCustomerOAuthStatusUpdatedWebhookSchema: Schema<PartnerEndCustomerOAuthStatusUpdatedWebhook> =
  s.object<PartnerEndCustomerOAuthStatusUpdatedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    endCustomerClientId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    institutionId: s.string(),
    institutionName: s.string(),
    status: partnerEndCustomerOAuthStatusUpdatedValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      endCustomerClientId: "end_customer_client_id",
      institutionId: "institution_id",
      institutionName: "institution_name",
    },
  });
