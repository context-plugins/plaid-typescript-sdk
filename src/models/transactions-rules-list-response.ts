import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsCategoryRuleSchema,
  type TransactionsCategoryRule,
} from "./transactions-category-rule.js";

/**
 * TransactionsRulesListResponse defines the response schema for `/beta/transactions/rules/v1/list`
 */
export type TransactionsRulesListResponse = {
  /** A list of the user's transaction rules */
  rules: TransactionsCategoryRule[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
