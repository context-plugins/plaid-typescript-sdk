import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxUserResetLoginRequest = {
  clientId?: string;
  secret?: string;
  userToken?: string;
  itemIds?: string[] | null;
  userId?: string;
};

export const sandboxUserResetLoginRequestSchema: Schema<SandboxUserResetLoginRequest> =
  s.object<SandboxUserResetLoginRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.optional(s.string()),
    itemIds: s.optionalNullable(s.array(s.string())),
    userId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      itemIds: "item_ids",
      userId: "user_id",
    },
  });
