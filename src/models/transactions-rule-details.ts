import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionsRuleFieldSchema, type TransactionsRuleField } from "./transactions-rule-field.js";
import { transactionsRuleTypeSchema, type TransactionsRuleType } from "./transactions-rule-type.js";

/** A representation of transactions rule details. */
export type TransactionsRuleDetails = {
  /** Transaction field for which the rule is defined. */
  field: TransactionsRuleField;
  /**
   * Transaction rule's match type. For `TRANSACTION_ID` field, `EXACT_MATCH` is available. Matches
   * are case sensitive.
   */
  type: TransactionsRuleType;
  /**
   * For `TRANSACTION_ID` field, provide `transaction_id`. For `MERCHANT_NAME` field, provide a
   * string pattern.
   */
  query: string;
};

export const transactionsRuleDetailsSchema: Schema<TransactionsRuleDetails> =
  s.object<TransactionsRuleDetails>({
    field: transactionsRuleFieldSchema,
    type: transactionsRuleTypeSchema,
    query: s.string(),
  });
