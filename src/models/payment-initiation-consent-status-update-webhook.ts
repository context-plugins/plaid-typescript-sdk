import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  paymentInitiationConsentStatusSchema,
  type PaymentInitiationConsentStatus,
} from "./payment-initiation-consent-status.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

export type PaymentInitiationConsentStatusUpdateWebhook = {
  webhookType: string;
  webhookCode: string;
  consentId: string;
  oldStatus: PaymentInitiationConsentStatus;
  newStatus: PaymentInitiationConsentStatus;
  timestamp: Date;
  error?: Error | null;
  environment: WebhookEnvironmentValues;
};

export const paymentInitiationConsentStatusUpdateWebhookSchema: Schema<PaymentInitiationConsentStatusUpdateWebhook> =
  s.object<PaymentInitiationConsentStatusUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    consentId: s.string(),
    oldStatus: paymentInitiationConsentStatusSchema,
    newStatus: paymentInitiationConsentStatusSchema,
    timestamp: s.dateTime(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      consentId: "consent_id",
      oldStatus: "old_status",
      newStatus: "new_status",
    },
  });
