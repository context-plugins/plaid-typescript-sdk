import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when a change to identity data has been detected on an Item. Items are checked for identity
 * updates every 30-90 days. We recommend that upon receiving this webhook you make another call to
 * `/identity/get` to fetch the user's latest identity data.
 */
export type IdentityDefaultUpdateWebhook = {
  /** `IDENTITY` */
  webhookType: string;
  /** `DEFAULT_UPDATE` */
  webhookCode: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /**
   * An object with keys of `account_id`'s that are mapped to their respective identity attributes
   * that changed.
   *
   * Example: `{ "XMBvvyMGQ1UoLbKByoMqH3nXMj84ALSdE5B58": ["PHONES"] }`
   */
  accountIdsWithUpdatedIdentity: Record<string, Record<string, unknown>>;
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

export const identityDefaultUpdateWebhookSchema: Schema<IdentityDefaultUpdateWebhook> =
  s.object<IdentityDefaultUpdateWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    accountIdsWithUpdatedIdentity: s.record(s.string(), s.record(s.string(), s.unknown())),
    error: s.nullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      accountIdsWithUpdatedIdentity: "account_ids_with_updated_identity",
    },
  });
