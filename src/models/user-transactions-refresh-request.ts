import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserTransactionsRefreshRequest = {
  userId: string;
  clientId?: string;
  secret?: string;
};

export const userTransactionsRefreshRequestSchema: Schema<UserTransactionsRefreshRequest> =
  s.object<UserTransactionsRefreshRequest>({
    userId: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      userId: "user_id",
      clientId: "client_id",
    },
  });
