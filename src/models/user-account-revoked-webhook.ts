import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * The `USER_ACCOUNT_REVOKED` webhook is fired when an end user has revoked access to their account
 * on the Data Provider's portal. This webhook is currently sent only for PNC Items, but may be sent
 * in the future for other financial institutions that allow account-level permissions revocation
 * through their portals. Upon receiving this webhook, it is recommended to delete any Plaid-derived
 * data you have stored that is associated with the revoked account.
 *
 * If you are using Auth and receive this webhook, this webhook indicates that the TAN associated
 * with the revoked account is no longer valid and cannot be used to create new transfers. You
 * should not create new ACH transfers for the account that was revoked until access has been
 * re-granted.
 *
 * You can request the user to re-grant access to their account by sending them through [update
 * mode](https://plaid.com/docs/link/update-mode). Alternatively, they may re-grant access directly
 * through the Data Provider's portal.
 *
 * After the user has re-granted access, Auth customers should call the auth endpoint again to
 * obtain the new TAN.
 */
export type UserAccountRevokedWebhook = {
  /** `ITEM` */
  webhookType: string;
  /** `USER_ACCOUNT_REVOKED` */
  webhookCode: string;
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** The Plaid `user_id` of the User associated with this webhook, warning, or error. */
  userId?: string;
  /** The external account ID of the affected account */
  accountId: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const userAccountRevokedWebhookSchema: Schema<UserAccountRevokedWebhook> =
  s.object<UserAccountRevokedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    itemId: s.string(),
    userId: s.optional(s.string()),
    accountId: s.string(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      itemId: "item_id",
      userId: "user_id",
      accountId: "account_id",
    },
  });
