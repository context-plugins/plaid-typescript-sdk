import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when recurring transactions data is updated. This includes when a new recurring stream is
 * detected or when a new transaction is added to an existing recurring stream. The
 * `RECURRING_TRANSACTIONS_UPDATE` webhook will also fire when one or more attributes of the
 * recurring stream changes, which is usually a result of the addition, update, or removal of
 * transactions to the stream.
 *
 * After receipt of this webhook, the updated data can be fetched from
 * `/transactions/recurring/get`.
 */
export type RecurringTransactionsUpdateWebhook = {
  /** `TRANSACTIONS` */
  webhookType: string;
  /** `RECURRING_TRANSACTIONS_UPDATE` */
  webhookCode: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** A list of `account_ids` for accounts that have new or updated recurring transactions data. */
  accountIds: string[];
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const recurringTransactionsUpdateWebhookSchema: Schema<RecurringTransactionsUpdateWebhook> =
  s.object<RecurringTransactionsUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    accountIds: s.array(s.string()),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      accountIds: "account_ids",
    },
  });
