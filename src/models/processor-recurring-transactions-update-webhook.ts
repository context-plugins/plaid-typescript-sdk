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
 * Fired when recurring transactions data is updated. This includes when a new recurring stream is
 * detected or when a new transaction is added to an existing recurring stream. The
 * `RECURRING_TRANSACTIONS_UPDATE` webhook will also fire when one or more attributes of the
 * recurring stream changes, which is usually a result of the addition, update, or removal of
 * transactions to the stream.
 *
 * After receipt of this webhook, the updated data can be fetched from
 * `/processor/transactions/recurring/get`.
 */
export type ProcessorRecurringTransactionsUpdateWebhook = {
  /** `TRANSACTIONS` */
  webhookType: string;
  /** `RECURRING_TRANSACTIONS_UPDATE` */
  webhookCode: string;
  /** The ID of the account. */
  accountId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const processorRecurringTransactionsUpdateWebhookSchema: Schema<ProcessorRecurringTransactionsUpdateWebhook> =
  s.object<ProcessorRecurringTransactionsUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    accountId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      accountId: "account_id",
    },
  });
