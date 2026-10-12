import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsCategoryRuleSchema,
  type TransactionsCategoryRule,
} from "./transactions-category-rule.js";

/**
 * TransactionsRulesCreateResponse defines the response schema for
 * `/beta/transactions/rules/v1/create`
 */
export type TransactionsRulesCreateResponse = {
  /** A representation of a transactions category rule. */
  rule: TransactionsCategoryRule;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
