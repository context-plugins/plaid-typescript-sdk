import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemImportRequestUserAuth = {
  userId: string;
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
