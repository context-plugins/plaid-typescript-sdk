import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionsRuleDetailsSchema, type TransactionsRuleDetails } from "./transactions-rule-details.js";

export type TransactionsCategoryRule = {
  id?: string;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  pfcPrimaryCategory?: string;
  pfcDetailedCategory?: string;
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
