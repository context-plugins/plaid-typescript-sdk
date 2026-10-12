import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when an Item is verified via automated micro-deposits. We recommend communicating to your
 * users when this event is received to notify them that their account is verified and ready for
 * use.
 */
export type AutomaticallyVerifiedWebhook = {
  /** `AUTH` */
  webhookType: string;
  /** `AUTOMATICALLY_VERIFIED` */
  webhookCode: string;
  /** The `account_id` of the account associated with the webhook */
  accountId: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
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
};

export const automaticallyVerifiedWebhookSchema: Schema<AutomaticallyVerifiedWebhook> =
  s.object<AutomaticallyVerifiedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    accountId: s.string(),
    itemId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      accountId: "account_id",
      itemId: "item_id",
    },
  });
