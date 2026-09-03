import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditBankIncomeTransaction = {
  amount?: number;
  date?: string;
  name?: string;
  originalDescription?: string | null;
  pending?: boolean;
  transactionId?: string;
  checkNumber?: string | null;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
};

export const creditBankIncomeTransactionSchema: Schema<CreditBankIncomeTransaction> =
  s.object<CreditBankIncomeTransaction>({
    amount: s.optional(s.number()),
    date: s.optional(s.dateOnly()),
    name: s.optional(s.string()),
    originalDescription: s.optionalNullable(s.string()),
    pending: s.optional(s.boolean()),
    transactionId: s.optional(s.string()),
    checkNumber: s.optionalNullable(s.string()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    unofficialCurrencyCode: s.optionalNullable(s.string()),
    _keysMap: {
      originalDescription: "original_description",
      transactionId: "transaction_id",
      checkNumber: "check_number",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
