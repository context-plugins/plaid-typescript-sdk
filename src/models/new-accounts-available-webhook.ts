import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when Plaid detects a new account. Upon receiving this webhook, you can prompt your users to
 * share new accounts with you through [update
 * mode](https://plaid.com/docs/link/update-mode/#using-update-mode-to-request-new-accounts) (US/CA
 * only). If the end user has opted not to share new accounts with Plaid via their institution's
 * OAuth settings, Plaid will not detect new accounts and this webhook will not fire. For end user
 * accounts in the EU and UK, upon receiving this webhook, you can prompt your user to re-link their
 * account and then delete the old Item via `/item/remove`.
 */
export type NewAccountsAvailableWebhook = {
  /** `ITEM` */
  webhookType?: string;
  /** `NEW_ACCOUNTS_AVAILABLE` */
  webhookCode?: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId?: string;
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
  /** The Plaid environment the webhook was sent from */
  environment?: WebhookEnvironmentValues;
};

export const newAccountsAvailableWebhookSchema: Schema<NewAccountsAvailableWebhook> =
  s.object<NewAccountsAvailableWebhook>({
    webhookType: s.optional(s.string()),
    webhookCode: s.optional(s.string()),
    itemId: s.optional(s.string()),
    userId: s.optional(s.string()),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    environment: s.optional(s.lazy(() => webhookEnvironmentValuesSchema)),
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
    },
  });
