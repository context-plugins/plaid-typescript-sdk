import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserItemsGetRequest = {
  clientId?: string;
  secret?: string;
  userToken?: string;
  userId?: string;
};

export const userItemsGetRequestSchema: Schema<UserItemsGetRequest> = s.object<UserItemsGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  userToken: s.optional(s.string()),
  userId: s.optional(s.string()),
  _keysMap: {
    clientId: "client_id",
    userToken: "user_token",
    userId: "user_id",
  },
});
