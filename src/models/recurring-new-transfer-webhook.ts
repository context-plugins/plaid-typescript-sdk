import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired when a new transfer of a recurring transfer is originated. */
export type RecurringNewTransferWebhook = {
  /** `TRANSFER` */
  webhookType: string;
  /** `RECURRING_NEW_TRANSFER` */
  webhookCode: string;
  /** Plaid's unique identifier for a recurring transfer. */
  recurringTransferId: string;
  /** Plaid's unique identifier for a transfer. */
  transferId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const recurringNewTransferWebhookSchema: Schema<RecurringNewTransferWebhook> =
  s.object<RecurringNewTransferWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    recurringTransferId: s.string(),
    transferId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      recurringTransferId: "recurring_transfer_id",
      transferId: "transfer_id",
    },
  });
