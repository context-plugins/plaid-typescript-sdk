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

/** Fired when the status of a payment consent has changed. */
export type PaymentInitiationConsentStatusUpdateWebhook = {
  /** `PAYMENT_INITIATION` */
  webhookType: string;
  /** `CONSENT_STATUS_UPDATE` */
  webhookCode: string;
  /** The `id` for the consent being updated */
  consentId: string;
  /**
   * The status of the payment consent.
   *
   * `UNAUTHORISED`: Consent created, but requires user authorisation.
   *
   * `REJECTED`: Consent authorisation was rejected by the bank.
   *
   * `AUTHORISED`: Consent is active and ready to be used.
   *
   * `REVOKED`: Consent has been revoked and can no longer be used.
   *
   * `EXPIRED`: Consent is no longer valid.
   */
  oldStatus: PaymentInitiationConsentStatus;
  /**
   * The status of the payment consent.
   *
   * `UNAUTHORISED`: Consent created, but requires user authorisation.
   *
   * `REJECTED`: Consent authorisation was rejected by the bank.
   *
   * `AUTHORISED`: Consent is active and ready to be used.
   *
   * `REVOKED`: Consent has been revoked and can no longer be used.
   *
   * `EXPIRED`: Consent is no longer valid.
   */
  newStatus: PaymentInitiationConsentStatus;
  /**
   * The timestamp of the update, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g.
   * `"2017-09-14T14:42:19.350Z"`
   */
  timestamp: Date;
  /**
   * Errors are identified by `error_code` and categorized by `error_type`. Use these in preference
   * to HTTP status codes to identify and handle specific errors. HTTP status codes are set and
   * provide the broadest categorization of errors: 4xx codes are for developer- or user-related
   * errors, and 5xx codes are for Plaid-related errors, and the status will be 2xx in non-error
   * cases. An Item with a non-`null` error object will only be part of an API response when calling
   * `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has
   * occurred; if an error has occurred, an error code will be returned instead.
   */
  error?: Error | null;
  /** The Plaid environment the webhook was sent from */
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
