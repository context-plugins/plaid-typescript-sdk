import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  userAccountIdentityEditHistorySchema,
  type UserAccountIdentityEditHistory,
} from "./user-account-identity-edit-history.js";
import { userAccountIdentitySchema, type UserAccountIdentity } from "./user-account-identity.js";
import { userAccountItemSchema, type UserAccountItem } from "./user-account-item.js";

/** UserAccountSessionGetResponse defines the response schema for `/user_account/session/get` */
export type UserAccountSessionGetResponse = {
  /** The identity data permissioned by the end user during the authorization flow. */
  identity: UserAccountIdentity | null;
  items: UserAccountItem[];
  /** Statistics tracking the number of edits made to identity fields over various time periods. */
  identityEditHistory?: UserAccountIdentityEditHistory | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const userAccountSessionGetResponseSchema: Schema<UserAccountSessionGetResponse> =
  s.object<UserAccountSessionGetResponse>({
    identity: s.nullable(s.lazy(() => userAccountIdentitySchema)),
    items: s.array(s.lazy(() => userAccountItemSchema)),
    identityEditHistory: s.optionalNullable(s.lazy(() => userAccountIdentityEditHistorySchema)),
    requestId: s.string(),
    _keysMap: {
      identityEditHistory: "identity_edit_history",
      requestId: "request_id",
    },
  });
