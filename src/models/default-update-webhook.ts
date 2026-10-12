import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when new transaction data is available for an Item. Plaid will typically check for new
 * transaction data several times a day.
 *
 * This webhook is intended for use with `/transactions/get`; if you are using the newer
 * `/transactions/sync` endpoint, this webhook will still be fired to maintain backwards
 * compatibility, but it is recommended to listen for and respond to the `SYNC_UPDATES_AVAILABLE`
 * webhook instead.
 */
export type DefaultUpdateWebhook = {
  /** `TRANSACTIONS` */
  webhookType: string;
  /** `DEFAULT_UPDATE` */
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
  /** The number of new transactions detected since the last time this webhook was fired. */
  newTransactions: number;
  /** The `item_id` of the Item the webhook relates to. */
  itemId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const defaultUpdateWebhookSchema: Schema<DefaultUpdateWebhook> = s.object<DefaultUpdateWebhook>({
  webhookType: s.string(),
  webhookCode: s.string(),
  error: s.optionalNullable(s.lazy(() => errorSchema)),
  newTransactions: s.float64(),
  itemId: s.string(),
  environment: webhookEnvironmentValuesSchema,
  _keysMap: {
    webhookType: "webhook_type",
    webhookCode: "webhook_code",
    newTransactions: "new_transactions",
    itemId: "item_id",
  },
});
