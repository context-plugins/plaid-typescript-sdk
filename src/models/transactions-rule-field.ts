import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionsRuleField = {
  TransactionId: "TRANSACTION_ID",
  MerchantName: "MERCHANT_NAME",
} as const;
export type TransactionsRuleField =
  | (typeof TransactionsRuleField)[keyof typeof TransactionsRuleField]
  | (string & {});

export const transactionsRuleFieldSchema: EnumSchema<TransactionsRuleField> =
  s.enumOf<TransactionsRuleField>(TransactionsRuleField);
