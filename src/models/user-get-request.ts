import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserGetRequest = {
  clientId?: string;
  secret?: string;
  userId: string;
};

export const userGetRequestSchema: Schema<UserGetRequest> = s.object<UserGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  userId: s.string(),
  _keysMap: {
    clientId: "client_id",
    userId: "user_id",
  },
});
