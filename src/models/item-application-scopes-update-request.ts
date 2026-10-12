import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopesContextSchema, type ScopesContext } from "./scopes-context.js";
import { scopesSchema, type Scopes } from "./scopes.js";

/**
 * ItemApplicationScopesUpdateRequest defines the request schema for
 * `/item/application/scopes/update`
 */
export type ItemApplicationScopesUpdateRequest = {
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
   * This field will map to the application ID that is returned from `/item/application/list`, or
   * provided to the institution in an oauth redirect.
   */
  applicationId: string;
  /** The scopes object */
  scopes: Scopes;
  /**
   * When scopes are updated during enrollment, this field must be populated with the state sent to
   * the partner in the OAuth Login URI. This field is required when the context is `ENROLLMENT`.
   */
  state?: string;
  /**
   * An indicator for when scopes are being updated. When scopes are updated via enrollment (i.e.
   * OAuth), the partner must send `ENROLLMENT`. When scopes are updated in a post-enrollment view,
   * the partner must send `PORTAL`.
   */
  context: ScopesContext;
};

export const itemApplicationScopesUpdateRequestSchema: Schema<ItemApplicationScopesUpdateRequest> =
  s.object<ItemApplicationScopesUpdateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.string(),
    applicationId: s.string(),
    scopes: scopesSchema,
    state: s.optional(s.string()),
    context: scopesContextSchema,
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      applicationId: "application_id",
    },
  });
