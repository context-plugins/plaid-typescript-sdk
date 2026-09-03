import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionsRuleFieldSchema, type TransactionsRuleField } from "./transactions-rule-field.js";
import { transactionsRuleTypeSchema, type TransactionsRuleType } from "./transactions-rule-type.js";

export type TransactionsRuleDetails = {
  field: TransactionsRuleField;
  type: TransactionsRuleType;
  query: string;
};

export const transactionsRuleDetailsSchema: Schema<TransactionsRuleDetails> =
  s.object<TransactionsRuleDetails>({
    field: transactionsRuleFieldSchema,
    type: transactionsRuleTypeSchema,
    query: s.string(),
  });
