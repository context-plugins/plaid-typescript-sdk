import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fires when an account has an expired verification when using micro-deposits */
export type FallbackAuthMicrodepositVerificationExpiredWebhook = {
  /** `AUTH` */
  webhookType: string;
  /** `VERIFICATION_EXPIRED` */
  webhookCode: string;
  /** The error code associated with the webhook. */
  error?: string | null;
  /** The external account ID associated with the micro-deposit */
  accountId: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const fallbackAuthMicrodepositVerificationExpiredWebhookSchema: Schema<FallbackAuthMicrodepositVerificationExpiredWebhook> =
  s.object<FallbackAuthMicrodepositVerificationExpiredWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.optionalNullable(s.string()),
    accountId: s.string(),
    itemId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      accountId: "account_id",
      itemId: "item_id",
    },
  });
