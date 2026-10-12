import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientUserIdentitySchema, type ClientUserIdentity } from "./client-user-identity.js";
import {
  consumerReportUserIdentitySchema,
  type ConsumerReportUserIdentity,
} from "./consumer-report-user-identity.js";

/** UserCreateRequest defines the request schema for `/user/create` */
export type UserCreateRequest = {
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
   * A unique ID representing the end user. Maximum of 128 characters. Typically this will be a user
   * ID number from your application. Personally identifiable information, such as an email address
   * or phone number, should not be used in the `client_user_id`.
   */
  clientUserId: string;
  /**
   * The identity fields associated with a user. For a user to be eligible for a Plaid Check
   * Consumer Report, all fields are required except `id_number`. Providing a partial SSN is
   * strongly recommended, and improves the accuracy of matching user records during compliance
   * processes such as file disclosure, dispute, or security freeze requests. If creating a report
   * that will be shared with GSEs such as Fannie or Freddie, a full Social Security Number must be
   * provided via the `id_number` field.
   */
  identity?: ClientUserIdentity | null;
  /** A unique ID representing a CRA reseller's end customer. Maximum of 128 characters. */
  endCustomer?: string;
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
  /**
   * If your integration with the User API predates December 10, 2025, set this field to `true` to
   * opt into the [New User APIs](https://plaid.com/docs/api/users/user-apis/). When enabled, you
   * can use the `identity` field instead of `consumer_report_user_identity`.
   */
  withUpgradedUser?: boolean;
};

export const userCreateRequestSchema: Schema<UserCreateRequest> = s.object<UserCreateRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  clientUserId: s.string(),
  identity: s.optionalNullable(s.lazy(() => clientUserIdentitySchema)),
  endCustomer: s.optional(s.string()),
  consumerReportUserIdentity: s.optionalNullable(s.lazy(() => consumerReportUserIdentitySchema)),
  withUpgradedUser: s.optional(s.boolean()),
  _keysMap: {
    clientId: "client_id",
    clientUserId: "client_user_id",
    endCustomer: "end_customer",
    consumerReportUserIdentity: "consumer_report_user_identity",
    withUpgradedUser: "with_upgraded_user",
  },
});
