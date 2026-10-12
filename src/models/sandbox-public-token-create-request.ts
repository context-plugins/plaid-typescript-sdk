import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productsSchema, type Products } from "./products.js";
import {
  sandboxPublicTokenCreateRequestOptionsSchema,
  type SandboxPublicTokenCreateRequestOptions,
} from "./sandbox-public-token-create-request-options.js";

/** SandboxPublicTokenCreateRequest defines the request schema for `/sandbox/public_token/create` */
export type SandboxPublicTokenCreateRequest = {
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
  /** The ID of the institution the Item will be associated with */
  institutionId: string;
  /**
   * The products to initially pull for the Item. May be any products that the specified
   * `institution_id` supports. This array may not be empty.
   */
  initialProducts: Products[];
  /**
   * An optional set of options to be used when configuring the Item. If specified, must not be
   * `null`.
   */
  options?: SandboxPublicTokenCreateRequestOptions;
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
  /**
   * A unique user identifier, created by `/user/create`. Integrations that began using
   * `/user/create` after December 10, 2025 use this field to identify a user instead of the
   * `user_token`. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userId?: string;
};

export const sandboxPublicTokenCreateRequestSchema: Schema<SandboxPublicTokenCreateRequest> =
  s.object<SandboxPublicTokenCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    institutionId: s.string(),
    initialProducts: s.array(s.lazy(() => productsSchema)),
    options: s.optional(s.lazy(() => sandboxPublicTokenCreateRequestOptionsSchema)),
    userToken: s.optional(s.string()),
    userId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      institutionId: "institution_id",
      initialProducts: "initial_products",
      userToken: "user_token",
      userId: "user_id",
    },
  });
