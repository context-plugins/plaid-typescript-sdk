import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsCategoryRuleSchema,
  type TransactionsCategoryRule,
} from "./transactions-category-rule.js";

export type TransactionsRulesListResponse = {
  rules: TransactionsCategoryRule[];
  requestId: string;
};

export const transactionsRulesListResponseSchema: Schema<TransactionsRulesListResponse> =
  s.object<TransactionsRulesListResponse>({
    rules: s.array(s.lazy(() => transactionsCategoryRuleSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
