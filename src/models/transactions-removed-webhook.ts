import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when transaction(s) for an Item are deleted. The deleted transaction IDs are included in
 * the webhook payload. Plaid will typically check for deleted transaction data several times a day.
 *
 * This webhook is intended for use with `/transactions/get`; if you are using the newer
 * `/transactions/sync` endpoint, this webhook will still be fired to maintain backwards
 * compatibility, but it is recommended to listen for and respond to the `SYNC_UPDATES_AVAILABLE`
 * webhook instead.
 */
export type TransactionsRemovedWebhook = {
  /** `TRANSACTIONS` */
  webhookType: string;
  /** `TRANSACTIONS_REMOVED` */
  webhookCode: string;
  /**
   * Errors are identified by `error_code` and categorized by `error_type`. Use these in preference
   * to HTTP status codes to identify and handle specific errors. HTTP status codes are set and
   * provide the broadest categorization of errors: 4xx codes are for developer- or user-related
   * errors, and 5xx codes are for Plaid-related errors, and the status will be 2xx in non-error
   * cases. An Item with a non-`null` error object will only be part of an API response when calling
   * `/item/get` to view Item status. Otherwise, error fields will be `null` if no error has
   * occurred; if an error has occurred, an error code will be returned instead.
   */
  error?: Error | null;
  /** An array of `transaction_ids` corresponding to the removed transactions */
  removedTransactions: string[];
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const transactionsRemovedWebhookSchema: Schema<TransactionsRemovedWebhook> =
  s.object<TransactionsRemovedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    removedTransactions: s.array(s.string()),
    itemId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      removedTransactions: "removed_transactions",
      itemId: "item_id",
    },
  });
