import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  userAccountIdentityEditHistorySchema,
  type UserAccountIdentityEditHistory,
} from "./user-account-identity-edit-history.js";
import { userAccountIdentitySchema, type UserAccountIdentity } from "./user-account-identity.js";
import { userAccountItemSchema, type UserAccountItem } from "./user-account-item.js";

export type UserAccountSessionGetResponse = {
  identity: UserAccountIdentity | null;
  items: UserAccountItem[];
  identityEditHistory?: UserAccountIdentityEditHistory | null;
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
