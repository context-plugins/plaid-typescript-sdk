import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Plaid will trigger a `DEFAULT_UPDATE` webhook for Items that undergo a change in Auth data. This
 * is generally caused by data partners notifying Plaid of a change in their account numbering
 * system or to their routing numbers. To avoid returned transactions, customers that receive a
 * `DEFAULT_UPDATE` webhook with the `account_ids_with_updated_auth` object populated should
 * immediately discontinue all usages of existing Auth data for those accounts and call `/auth/get`
 * or `/processor/auth/get` to obtain updated account and routing numbers.
 */
export type AuthDefaultUpdateWebhook = {
  /** `AUTH` */
  webhookType: string;
  /** `DEFAULT_UPDATE` */
  webhookCode: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** An array of `account_id`'s for accounts that contain new auth. */
  accountIdsWithNewAuth: string[];
  /**
   * An object with keys of `account_id`'s that are mapped to their respective auth attributes that
   * changed. `ACCOUNT_NUMBER` and `ROUTING_NUMBER` are the two potential values that can be flagged
   * as updated.
   *
   * Example: `{ "XMBvvyMGQ1UoLbKByoMqH3nXMj84ALSdE5B58": ["ACCOUNT_NUMBER"] }`
   */
  accountIdsWithUpdatedAuth: Record<string, Record<string, unknown>>;
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
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const authDefaultUpdateWebhookSchema: Schema<AuthDefaultUpdateWebhook> =
  s.object<AuthDefaultUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    accountIdsWithNewAuth: s.array(s.string()),
    accountIdsWithUpdatedAuth: s.record(s.string(), s.record(s.string(), s.unknown())),
    error: s.nullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      accountIdsWithNewAuth: "account_ids_with_new_auth",
      accountIdsWithUpdatedAuth: "account_ids_with_updated_auth",
    },
  });
