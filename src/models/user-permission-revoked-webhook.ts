import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * The `USER_PERMISSION_REVOKED` webhook may be fired when an end user has revoked the permission
 * that they previously granted to access an Item. If the end user revoked their permissions through
 * Plaid (such as via the Plaid Portal or by contacting Plaid support), the webhook will fire. If
 * the end user revoked their permissions directly through the institution, this webhook may not
 * always fire, since some institutions' consent portals do not trigger this webhook. To attempt to
 * restore the Item, it can be sent through [update mode](https://plaid.com/docs/link/update-mode).
 * Depending on the exact process the end user used to revoke permissions, it may not be possible to
 * launch update mode for the Item. If you encounter an error when attempting to create a Link token
 * for update mode on an Item with revoked permissions, create a fresh Link token for the user.
 *
 * Note that when working with tokenized account numbers with Auth or Transfer, the account number
 * provided by Plaid will no longer work for creating transfers once user permission has been
 * revoked, except for US Bank Items.
 */
export type UserPermissionRevokedWebhook = {
  /** `ITEM` */
  webhookType: string;
  /** `USER_PERMISSION_REVOKED` */
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
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const userPermissionRevokedWebhookSchema: Schema<UserPermissionRevokedWebhook> =
  s.object<UserPermissionRevokedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
    },
  });
