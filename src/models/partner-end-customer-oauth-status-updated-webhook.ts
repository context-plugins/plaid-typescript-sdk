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

/**
 * The webhook of type `PARTNER` and code `END_CUSTOMER_OAUTH_STATUS_UPDATED` will be fired when a
 * partner's end customer has an update on their OAuth registration status with an institution.
 */
export type PartnerEndCustomerOAuthStatusUpdatedWebhook = {
  /** `PARTNER` */
  webhookType: string;
  /** `END_CUSTOMER_OAUTH_STATUS_UPDATED` */
  webhookCode: string;
  /** The client ID of the end customer */
  endCustomerClientId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
  /** The institution ID */
  institutionId: string;
  /** The institution name */
  institutionName: string;
  /** The OAuth status of the update */
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
