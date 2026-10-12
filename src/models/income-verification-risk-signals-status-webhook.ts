import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when risk signals have been processed for documents uploaded via Document Income. It will
 * typically take a minute or two for this webhook to fire after the end user has uploaded their
 * documents in the Document Income flow. Once this webhook has fired,
 * `/credit/payroll_income/risk_signals/get` may then be called to determine whether the documents
 * were successfully processed and to retrieve risk data.
 */
export type IncomeVerificationRiskSignalsStatusWebhook = {
  /** `"INCOME"` */
  webhookType: string;
  /** `INCOME_VERIFICATION_RISK_SIGNALS` */
  webhookCode: string;
  /** The Item ID associated with the verification. */
  itemId: string;
  /** The Plaid `user_id` of the User associated with this webhook, warning, or error. */
  userId?: string;
  /**
   * `RISK_SIGNALS_PROCESSING_COMPLETE`: The income verification fraud detection processing has
   * completed. If the user uploaded multiple documents, this webhook will fire when all documents
   * have finished processing. Call the `/credit/payroll_income/risk_signals/get` endpoint to get
   * all risk signal data.
   */
  riskSignalsStatus: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const incomeVerificationRiskSignalsStatusWebhookSchema: Schema<IncomeVerificationRiskSignalsStatusWebhook> =
  s.object<IncomeVerificationRiskSignalsStatusWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    riskSignalsStatus: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      riskSignalsStatus: "risk_signals_status",
    },
  });
