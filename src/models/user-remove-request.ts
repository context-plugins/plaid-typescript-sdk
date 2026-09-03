import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserRemoveRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  userToken?: string;
};

export const userRemoveRequestSchema: Schema<UserRemoveRequest> = s.object<UserRemoveRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  userId: s.optional(s.string()),
  userToken: s.optional(s.string()),
  _keysMap: {
    clientId: "client_id",
    userId: "user_id",
    userToken: "user_token",
  },
});
