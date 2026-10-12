import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Contains the state of an SMS Same-Day Micro-deposits verification session. */
export type HostedMmdVerificationWebhook = {
  /** `AUTH` */
  webhookType: string;
  /** `SMS_MICRODEPOSITS_VERIFICATION` */
  webhookCode: string;
  /**
   * The final status of the Same-Day Micro-deposits verification. Will always be
   * `MANUALLY_VERIFIED` or `VERIFICATION_FAILED`.
   */
  status: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The external account ID of the affected account */
  accountId: string;
  /** The Plaid environment the webhook was sent from */
  environment?: WebhookEnvironmentValues;
};

export const hostedMmdVerificationWebhookSchema: Schema<HostedMmdVerificationWebhook> =
  s.object<HostedMmdVerificationWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    status: s.string(),
    itemId: s.string(),
    accountId: s.string(),
    environment: s.optional(s.lazy(() => webhookEnvironmentValuesSchema)),
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      accountId: "account_id",
    },
  });
