import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * This webhook is only sent to [Plaid processor
 * partners](https://plaid.com/docs/auth/partnerships/).
 *
 * Fired when an Item's historical transaction pull is completed and Plaid has prepared as much
 * historical transaction data as possible for the Item. Once this webhook has been fired,
 * transaction data beyond the most recent 30 days can be fetched for the Item. This webhook will
 * also be fired if account selections for the Item are updated, with `new_transactions` set to the
 * number of net new transactions pulled after the account selection update.
 *
 * This webhook is intended for use with `/processor/transactions/get`; if you are using the newer
 * `/processor/transactions/sync` endpoint, this webhook will still be fired to maintain backwards
 * compatibility, but it is recommended to listen for and respond to the `SYNC_UPDATES_AVAILABLE`
 * webhook instead.
 */
export type ProcessorHistoricalUpdateWebhook = {
  /** `TRANSACTIONS` */
  webhookType: string;
  /** `HISTORICAL_UPDATE` */
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
  /** The number of new transactions available */
  newTransactions: number;
  /** The ID of the account. */
  accountId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const processorHistoricalUpdateWebhookSchema: Schema<ProcessorHistoricalUpdateWebhook> =
  s.object<ProcessorHistoricalUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
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
