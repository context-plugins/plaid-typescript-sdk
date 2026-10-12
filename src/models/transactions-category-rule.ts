import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionsRuleDetailsSchema, type TransactionsRuleDetails } from "./transactions-rule-details.js";

/** A representation of a transactions category rule. */
export type TransactionsCategoryRule = {
  /** A unique identifier of the rule created */
  id?: string;
  /** The Plaid-generated unique identifier for the end user this rule belongs to. */
  userId?: string;
  /**
   * Date and time when a rule was created in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format
   * ( `YYYY-MM-DDTHH:mm:ssZ` ).
   */
  createdAt?: Date;
  /**
   * Date and time when a rule was last updated in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format ( `YYYY-MM-DDTHH:mm:ssZ` ).
   */
  updatedAt?: Date;
  /**
   * A personal finance primary category. See the [taxonomy csv
   * file](https://plaid.com/documents/pfc-taxonomy-all.csv) for a full list of personal finance
   * categories.
   */
  pfcPrimaryCategory?: string;
  /**
   * A personal finance detailed category. See the [taxonomy csv
   * file](https://plaid.com/documents/pfc-taxonomy-all.csv) for a full list of personal finance
   * categories.
   */
  pfcDetailedCategory?: string;
  /** A representation of transactions rule details. */
  ruleDetails?: TransactionsRuleDetails;
};

export const transactionsCategoryRuleSchema: Schema<TransactionsCategoryRule> =
  s.object<TransactionsCategoryRule>({
    id: s.optional(s.string()),
    userId: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    pfcPrimaryCategory: s.optional(s.string()),
    pfcDetailedCategory: s.optional(s.string()),
    ruleDetails: s.optional(s.lazy(() => transactionsRuleDetailsSchema)),
    _keysMap: {
      userId: "user_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      pfcPrimaryCategory: "pfc_primary_category",
      pfcDetailedCategory: "pfc_detailed_category",
      ruleDetails: "rule_details",
    },
  });
