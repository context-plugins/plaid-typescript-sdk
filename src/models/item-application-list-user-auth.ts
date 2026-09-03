import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemApplicationListUserAuth = {
  userId?: string | null;
  fiUsernameHash?: string | null;
};

export const itemApplicationListUserAuthSchema: Schema<ItemApplicationListUserAuth> =
  s.object<ItemApplicationListUserAuth>({
    userId: s.optionalNullable(s.string()),
    fiUsernameHash: s.optionalNullable(s.string()),
    _keysMap: {
      userId: "user_id",
      fiUsernameHash: "fi_username_hash",
    },
  });
