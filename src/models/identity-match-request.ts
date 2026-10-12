import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  identityMatchRequestOptionsSchema,
  type IdentityMatchRequestOptions,
} from "./identity-match-request-options.js";
import { identityMatchUserSchema, type IdentityMatchUser } from "./identity-match-user.js";

/** IdentityMatchRequest defines the request schema for `/identity/match` */
export type IdentityMatchRequest = {
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
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
  /**
   * The user's legal name, phone number, email address and address used to perform fuzzy match. If
   * Financial Account Matching is enabled in the Identity Verification product, leave this field
   * empty to automatically match against PII collected from the Identity Verification checks.
   */
  user?: IdentityMatchUser;
  /** An optional object to filter `/identity/match` results */
  options?: IdentityMatchRequestOptions;
};

export const identityMatchRequestSchema: Schema<IdentityMatchRequest> = s.object<IdentityMatchRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  accessToken: s.string(),
  user: s.optional(s.lazy(() => identityMatchUserSchema)),
  options: s.optional(s.lazy(() => identityMatchRequestOptionsSchema)),
  _keysMap: {
    clientId: "client_id",
    accessToken: "access_token",
  },
});
