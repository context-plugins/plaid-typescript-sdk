import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionsRulesRemoveRequest = {
  clientId?: string;
  secret?: string;
  clientUserId: string;
  ruleId: string;
};

export const transactionsRulesRemoveRequestSchema: Schema<TransactionsRulesRemoveRequest> =
  s.object<TransactionsRulesRemoveRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    clientUserId: s.string(),
    ruleId: s.string(),
    _keysMap: {
      clientId: "client_id",
      clientUserId: "client_user_id",
      ruleId: "rule_id",
    },
  });
