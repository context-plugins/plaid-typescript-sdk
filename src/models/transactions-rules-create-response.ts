import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsCategoryRuleSchema,
  type TransactionsCategoryRule,
} from "./transactions-category-rule.js";

export type TransactionsRulesCreateResponse = {
  rule: TransactionsCategoryRule;
  requestId: string;
};

export const transactionsRulesCreateResponseSchema: Schema<TransactionsRulesCreateResponse> =
  s.object<TransactionsRulesCreateResponse>({
    rule: transactionsCategoryRuleSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
