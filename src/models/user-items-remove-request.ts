import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserItemsRemoveRequest = {
  clientId?: string;
  secret?: string;
  userToken?: string;
  userId?: string;
  itemIds: string[];
};

export const userItemsRemoveRequestSchema: Schema<UserItemsRemoveRequest> = s.object<UserItemsRemoveRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  userToken: s.optional(s.string()),
  userId: s.optional(s.string()),
  itemIds: s.array(s.string()),
  _keysMap: {
    clientId: "client_id",
    userToken: "user_token",
    userId: "user_id",
    itemIds: "item_ids",
  },
});
