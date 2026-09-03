import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionsRulesListRequest = {
  clientId?: string;
  secret?: string;
  clientUserId: string;
};

export const transactionsRulesListRequestSchema: Schema<TransactionsRulesListRequest> =
  s.object<TransactionsRulesListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    clientUserId: s.string(),
    _keysMap: {
      clientId: "client_id",
      clientUserId: "client_user_id",
    },
  });
