import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specifies options for initializing Link for [update
 * mode](https://plaid.com/docs/link/update-mode).
 */
export type LinkTokenCreateRequestUpdate = {
  /**
   * If `true`, enables [update mode with Account
   * Select](https://plaid.com/docs/link/update-mode/#using-update-mode-to-request-new-accounts) for
   * institutions in the US and Canada that do not use OAuth, or that use OAuth but do not have
   * their own account selection flow. For institutions in the US that have an OAuth account
   * selection flow (i.e. most OAuth-enabled institutions), update mode with Account Select will
   * always be enabled, regardless of the value of this field.
   *
   * @default false
   */
  accountSelectionEnabled?: boolean;
  /**
   * Note: this field is not currently used. Plaid may enable this field in the future if
   * 1033-related expiration begins to be enforced.
   *
   * By default, Plaid will enable the reauthorization flow during update mode for an Item enabled
   * for [Data Transparency
   * Messaging](https://plaid.com/docs/link/data-transparency-messaging-migration-guide/) if the
   * Item expires within six months. During a reauthorization flow, an end user will review Plaid's
   * end user privacy policy, use case and data scope consents, and account access consents; they
   * may also be required to log in to their financial institution's OAuth flow. After the end user
   * successfully completes the reauthorization flow, the Item's expiration date will be extended to
   * 12 months from the time that the reauthorization took place. This field allows you to
   * optionally override the default reauthorization scheduling logic to either forcibly enable or
   * disable the reauthorization flow for a given update mode session. This field does not impact
   * the flow for Items at institutions in the EU or UK.
   */
  reauthorizationEnabled?: boolean;
  /**
   * If `true`, a `user_token` or `user_id` must also be provided, and Link will open in update mode
   * for the given user.
   *
   * @default false
   */
  user?: boolean;
  /**
   * An array of `item_id`s associated with the user to be updated in update mode. If empty or
   * `null`, this field will default to initializing update mode for the most recent unhealthy Item
   * associated with the user. A `user_token` must also be provided to use this field.
   */
  itemIds?: string[] | null;
};

export const linkTokenCreateRequestUpdateSchema: Schema<LinkTokenCreateRequestUpdate> =
  s.object<LinkTokenCreateRequestUpdate>({
    accountSelectionEnabled: s.defaulted(s.boolean(), false),
    reauthorizationEnabled: s.optional(s.boolean()),
    user: s.defaulted(s.boolean(), false),
    itemIds: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      accountSelectionEnabled: "account_selection_enabled",
      reauthorizationEnabled: "reauthorization_enabled",
      itemIds: "item_ids",
    },
  });
