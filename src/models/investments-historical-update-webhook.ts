import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/** Fired after an asynchronous extraction on an investment account. */
export type InvestmentsHistoricalUpdateWebhook = {
  /** `INVESTMENTS_TRANSACTIONS` */
  webhookType: string;
  /** `HISTORICAL_UPDATE` */
  webhookCode: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The Plaid `user_id` of the User associated with this webhook, warning, or error. */
  userId?: string;
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
  /** The number of new transactions reported since the last time this webhook was fired. */
  newInvestmentsTransactions: number;
  /** The number of cancelled transactions reported since the last time this webhook was fired. */
  cancelledInvestmentsTransactions: number;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const investmentsHistoricalUpdateWebhookSchema: Schema<InvestmentsHistoricalUpdateWebhook> =
  s.object<InvestmentsHistoricalUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    newInvestmentsTransactions: s.float64(),
    cancelledInvestmentsTransactions: s.float64(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      newInvestmentsTransactions: "new_investments_transactions",
      cancelledInvestmentsTransactions: "cancelled_investments_transactions",
    },
  });
