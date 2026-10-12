import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when new bank transfer events are available. Receiving this webhook indicates you should
 * fetch the new events from `/bank_transfer/event/sync`.
 */
export type BankTransfersEventsUpdateWebhook = {
  /** `BANK_TRANSFERS` */
  webhookType: string;
  /** `BANK_TRANSFERS_EVENTS_UPDATE` */
  webhookCode: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const bankTransfersEventsUpdateWebhookSchema: Schema<BankTransfersEventsUpdateWebhook> =
  s.object<BankTransfersEventsUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
    },
  });
