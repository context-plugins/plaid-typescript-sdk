import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sessionTokenCreateRequestUserSchema,
  type SessionTokenCreateRequestUser,
} from "./session-token-create-request-user.js";

/** SessionTokenCreateRequest defines the request schema for `/session/token/create` */
export type SessionTokenCreateRequest = {
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
  /** The id of a template defined in Plaid Dashboard */
  templateId: string;
  /** Details about the end user. Required if a root-level `user_id` is not provided. */
  user?: SessionTokenCreateRequestUser;
  /**
   * A URI indicating the destination where a user should be forwarded after completing the Link
   * flow; used to support OAuth authentication flows when launching Link in the browser or another
   * app. The `redirect_uri` should not contain any query parameters. When used in Production, must
   * be an https URI. Note that any redirect URI must also be added to the Allowed redirect URIs
   * list in the [developer dashboard](https://dashboard.plaid.com/team/api). If initializing on
   * Android, `android_package_name` must be specified instead and `redirect_uri` should be left
   * blank.
   */
  redirectUri?: string;
  /**
   * The name of your app's Android package. Required if using the session token to initialize Layer
   * on Android. Any package name specified here must also be added to the Allowed Android package
   * names setting on the [developer dashboard](https://dashboard.plaid.com/team/api). When creating
   * a session token for initializing Layer on other platforms, `android_package_name` must be left
   * blank and `redirect_uri` should be used instead.
   */
  androidPackageName?: string;
  /**
   * The destination URL to which any webhooks should be sent. If you use the same webhook listener
   * for all Sandbox or all Production activity, set this value in the Layer template editor in the
   * Dashboard instead. Only provide a value in this field if you need to use multiple webhook URLs
   * per environment (an uncommon use case). If provided, a value in this field will take priority
   * over webhook values set in the Layer template editor.
   */
  webhook?: string;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
};

export const sessionTokenCreateRequestSchema: Schema<SessionTokenCreateRequest> =
  s.object<SessionTokenCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    templateId: s.string(),
    user: s.optional(s.lazy(() => sessionTokenCreateRequestUserSchema)),
    redirectUri: s.optional(s.string()),
    androidPackageName: s.optional(s.string()),
    webhook: s.optional(s.string()),
    userId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      templateId: "template_id",
      redirectUri: "redirect_uri",
      androidPackageName: "android_package_name",
      userId: "user_id",
    },
  });
