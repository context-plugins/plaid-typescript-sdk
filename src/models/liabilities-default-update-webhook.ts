import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * The webhook of type `LIABILITIES` and code `DEFAULT_UPDATE` will be fired when new or updated
 * liabilities have been detected on a liabilities item.
 */
export type LiabilitiesDefaultUpdateWebhook = {
  /** `LIABILITIES` */
  webhookType: string;
  /** `DEFAULT_UPDATE` */
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
  error: Error | null;
  /** An array of `account_id`'s for accounts that contain new liabilities.' */
  accountIdsWithNewLiabilities: string[];
  /**
   * An object with keys of `account_id`'s that are mapped to their respective liabilities fields
   * that changed.
   *
   * Example: `{ "XMBvvyMGQ1UoLbKByoMqH3nXMj84ALSdE5B58": ["past_amount_due"] }`
   */
  accountIdsWithUpdatedLiabilities: Record<string, Record<string, unknown>>;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const liabilitiesDefaultUpdateWebhookSchema: Schema<LiabilitiesDefaultUpdateWebhook> =
  s.object<LiabilitiesDefaultUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    error: s.nullable(s.lazy(() => errorSchema)),
    accountIdsWithNewLiabilities: s.array(s.string()),
    accountIdsWithUpdatedLiabilities: s.record(s.string(), s.record(s.string(), s.unknown())),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      accountIdsWithNewLiabilities: "account_ids_with_new_liabilities",
      accountIdsWithUpdatedLiabilities: "account_ids_with_updated_liabilities",
    },
  });
