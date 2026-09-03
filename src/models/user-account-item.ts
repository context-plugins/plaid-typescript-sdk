import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAccountItem = {
  itemId?: string;
  accessToken?: string;
};

export const userAccountItemSchema: Schema<UserAccountItem> = s.object<UserAccountItem>({
  itemId: s.optional(s.string()),
  accessToken: s.optional(s.string()),
  _keysMap: {
    itemId: "item_id",
    accessToken: "access_token",
  },
});
