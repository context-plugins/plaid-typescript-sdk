import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserItemsAssociateRequest = {
  clientId?: string;
  secret?: string;
  userId: string;
  itemIds: string[];
};

export const userItemsAssociateRequestSchema: Schema<UserItemsAssociateRequest> =
  s.object<UserItemsAssociateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.string(),
    itemIds: s.array(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      itemIds: "item_ids",
    },
  });
