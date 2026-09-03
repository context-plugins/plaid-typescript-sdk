import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionsRuleType = {
  ExactMatch: "EXACT_MATCH",
  SubstringMatch: "SUBSTRING_MATCH",
} as const;
export type TransactionsRuleType =
  | (typeof TransactionsRuleType)[keyof typeof TransactionsRuleType]
  | (string & {});

export const transactionsRuleTypeSchema: EnumSchema<TransactionsRuleType> =
  s.enumOf<TransactionsRuleType>(TransactionsRuleType);
