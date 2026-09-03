import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SessionTokenCreateRequestUser = {
  clientUserId: string;
  userId?: string;
};

export const sessionTokenCreateRequestUserSchema: Schema<SessionTokenCreateRequestUser> =
  s.object<SessionTokenCreateRequestUser>({
    clientUserId: s.string(),
    userId: s.optional(s.string()),
    _keysMap: {
      clientUserId: "client_user_id",
      userId: "user_id",
    },
  });
