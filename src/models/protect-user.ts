import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtectUser = {
  userId?: string;
  clientUserId?: string;
};

export const protectUserSchema: Schema<ProtectUser> = s.object<ProtectUser>({
  userId: s.optional(s.string()),
  clientUserId: s.optional(s.string()),
  _keysMap: {
    userId: "user_id",
    clientUserId: "client_user_id",
  },
});
