import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when new transfer events are available. Receiving this webhook indicates you should fetch
 * the new events from `/transfer/event/sync`. If multiple transfer events occur within a single
 * minute, only one webhook will be fired, so a single webhook instance may correspond to multiple
 * transfer events.
 */
export type TransferEventsUpdateWebhook = {
  /** `TRANSFER` */
  webhookType: string;
  /** `TRANSFER_EVENTS_UPDATE` */
  webhookCode: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const transferEventsUpdateWebhookSchema: Schema<TransferEventsUpdateWebhook> =
  s.object<TransferEventsUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
    },
  });
