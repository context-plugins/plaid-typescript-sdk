import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * This webhook is only sent to [Plaid processor
 * partners](https://plaid.com/docs/auth/partnerships/).
 *
 * Fired when an Item's initial transaction pull is completed. Once this webhook has been fired,
 * transaction data for the most recent 30 days can be fetched for the Item. This webhook will also
 * be fired if account selections for the Item are updated, with `new_transactions` set to the
 * number of net new transactions pulled after the account selection update.
 *
 * This webhook is intended for use with `/processor/transactions/get`; if you are using the newer
 * `/processor/transactions/sync` endpoint, this webhook will still be fired to maintain backwards
 * compatibility, but it is recommended to listen for and respond to the `SYNC_UPDATES_AVAILABLE`
 * webhook instead.
 */
export type ProcessorInitialUpdateWebhook = {
  /** `TRANSACTIONS` */
  webhookType: string;
  /** `INITIAL_UPDATE` */
  webhookCode: string;
  /** The error code associated with the webhook. */
  error?: string | null;
  /** The number of new transactions available. */
  newTransactions: number;
  /** The ID of the account. */
  accountId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const processorInitialUpdateWebhookSchema: Schema<ProcessorInitialUpdateWebhook> =
  s.object<ProcessorInitialUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.optionalNullable(s.string()),
    newTransactions: s.float64(),
    accountId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      newTransactions: "new_transactions",
      accountId: "account_id",
    },
  });
