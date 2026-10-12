import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when the status of an income verification instance has changed. This webhook is fired for
 * both the Document and Payroll Income flows, but not the Bank Income flow. It will typically take
 * several minutes for this webhook to fire after the end user has uploaded their documents in the
 * Document Income flow.
 */
export type IncomeVerificationStatusWebhook = {
  /** `"INCOME"` */
  webhookType: string;
  /** `INCOME_VERIFICATION` */
  webhookCode: string;
  /** The Item ID associated with the verification. */
  itemId: string;
  /** The Plaid `user_id` of the User associated with this webhook, warning, or error. */
  userId?: string;
  /**
   * `VERIFICATION_STATUS_PROCESSING_COMPLETE`: The income verification processing has completed.
   * This indicates that the documents have been parsed successfully or that the documents were not
   * parsable. If the user uploaded multiple documents, this webhook will fire when all documents
   * have finished processing. Call the `/credit/payroll_income/get` endpoint and check the document
   * metadata to see which documents were successfully parsed.
   *
   * `VERIFICATION_STATUS_PROCESSING_FAILED`: An unexpected internal error occurred when attempting
   * to process the verification documentation.
   *
   * `VERIFICATION_STATUS_PENDING_APPROVAL`: (deprecated) The income verification has been sent to
   * the user for review.
   */
  verificationStatus: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const incomeVerificationStatusWebhookSchema: Schema<IncomeVerificationStatusWebhook> =
  s.object<IncomeVerificationStatusWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    verificationStatus: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      verificationStatus: "verification_status",
    },
  });
