import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request input for listing Identity Verifications */
export type IdentityVerificationListRequest = {
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * ID of the associated Identity Verification template. Like all Plaid identifiers, this is
   * case-sensitive.
   */
  templateId: string;
  /**
   * A unique ID that identifies the end user in your system. Either a `user_id` or the
   * `client_user_id` must be provided. This ID can also be used to associate user-specific data
   * from other Plaid products. Financial Account Matching requires this field and the
   * `/link/token/create` `client_user_id` to be consistent. Personally identifiable information,
   * such as an email address or phone number, should not be used in the `client_user_id`.
   */
  clientUserId?: string;
  /**
   * A unique user identifier, created by calling `/user/create`. Either a `user_id` or the
   * `client_user_id` must be provided. The `user_id` may only be used instead of the
   * `client_user_id` if you were not a pre-existing user of `/user/create` as of December 10, 2025,
   * or if you have since [migrated to the new User
   * APIs](https://plaid.com/docs/api/users/migrate-to-new-user-apis); for more details, see [New
   * User APIs](https://plaid.com/docs/api/users/user-apis). If both this field and the
   * `client_user_id` are present in the request, the `user_id` must have been created from the
   * provided `client_user_id`.
   */
  userId?: string | null;
  /** An identifier that determines which page of results you receive. */
  cursor?: string | null;
};

export const identityVerificationListRequestSchema: Schema<IdentityVerificationListRequest> =
  s.object<IdentityVerificationListRequest>({
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    templateId: s.string(),
    clientUserId: s.optional(s.string()),
    userId: s.optionalNullable(s.string()),
    cursor: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      templateId: "template_id",
      clientUserId: "client_user_id",
      userId: "user_id",
    },
  });
