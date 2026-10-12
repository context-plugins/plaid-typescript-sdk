import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired when a recurring transfer is cancelled by Plaid. */
export type RecurringCancelledWebhook = {
  /** `TRANSFER` */
  webhookType: string;
  /** `RECURRING_CANCELLED` */
  webhookCode: string;
  /** Plaid's unique identifier for a recurring transfer. */
  recurringTransferId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const recurringCancelledWebhookSchema: Schema<RecurringCancelledWebhook> =
  s.object<RecurringCancelledWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    recurringTransferId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      recurringTransferId: "recurring_transfer_id",
    },
  });
