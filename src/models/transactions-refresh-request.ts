import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionsRefreshRequest = {
  clientId?: string;
  accessToken: string;
  secret?: string;
};

export const transactionsRefreshRequestSchema: Schema<TransactionsRefreshRequest> =
  s.object<TransactionsRefreshRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
