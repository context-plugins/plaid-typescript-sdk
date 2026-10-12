import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientUserIdentitySchema, type ClientUserIdentity } from "./client-user-identity.js";
import {
  consumerReportUserIdentitySchema,
  type ConsumerReportUserIdentity,
} from "./consumer-report-user-identity.js";

/** UserUpdateRequest defines the request schema for `/user/update` */
export type UserUpdateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
  /**
   * The identity fields associated with a user. For a user to be eligible for a Plaid Check
   * Consumer Report, all fields are required except `id_number`. Providing a partial SSN is
   * strongly recommended, and improves the accuracy of matching user records during compliance
   * processes such as file disclosure, dispute, or security freeze requests. If creating a report
   * that will be shared with GSEs such as Fannie or Freddie, a full Social Security Number must be
   * provided via the `id_number` field.
   */
  identity?: ClientUserIdentity | null;
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
  /**
   * This field is only used by integrations created before December 10, 2025. All other
   * integrations must use the `identity` object instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis). To create a Plaid Check Consumer Report for
   * a user when using a `user_token`, this field must be present. If this field is not provided
   * during user token creation, you can add it to the user later by calling `/user/update`. Once
   * the field has been added to the user, you will be able to call `/link/token/create` with a
   * non-empty `consumer_report_permissible_purpose` (which will automatically create a Plaid Check
   * Consumer Report), or call `/cra/check_report/create` for that user.
   */
  consumerReportUserIdentity?: ConsumerReportUserIdentity | null;
};

export const userUpdateRequestSchema: Schema<UserUpdateRequest> = s.object<UserUpdateRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  userId: s.optional(s.string()),
  identity: s.optionalNullable(s.lazy(() => clientUserIdentitySchema)),
  userToken: s.optional(s.string()),
  consumerReportUserIdentity: s.optionalNullable(s.lazy(() => consumerReportUserIdentitySchema)),
  _keysMap: {
    clientId: "client_id",
    userId: "user_id",
    userToken: "user_token",
    consumerReportUserIdentity: "consumer_report_user_identity",
  },
});
