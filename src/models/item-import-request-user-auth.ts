import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Object of user ID and auth token pair, permitting Plaid to aggregate a user's accounts */
export type ItemImportRequestUserAuth = {
  /** Opaque user identifier */
  userId: string;
  /** Authorization token Plaid will use to aggregate this user's accounts */
  authToken: string;
};

export const itemImportRequestUserAuthSchema: Schema<ItemImportRequestUserAuth> =
  s.object<ItemImportRequestUserAuth>({
    userId: s.string(),
    authToken: s.string(),
    _keysMap: {
      userId: "user_id",
      authToken: "auth_token",
    },
  });
