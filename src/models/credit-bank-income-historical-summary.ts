import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";
import {
  creditBankIncomeTransactionSchema,
  type CreditBankIncomeTransaction,
} from "./credit-bank-income-transaction.js";

export type CreditBankIncomeHistoricalSummary = {
  totalAmount?: number;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
  totalAmounts?: CreditAmountWithCurrency[];
  startDate?: string;
  endDate?: string;
  transactions?: CreditBankIncomeTransaction[];
};

export const creditBankIncomeHistoricalSummarySchema: Schema<CreditBankIncomeHistoricalSummary> =
  s.object<CreditBankIncomeHistoricalSummary>({
    totalAmount: s.optional(s.number()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    unofficialCurrencyCode: s.optionalNullable(s.string()),
    totalAmounts: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    transactions: s.optional(s.array(s.lazy(() => creditBankIncomeTransactionSchema))),
    _keysMap: {
      totalAmount: "total_amount",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      totalAmounts: "total_amounts",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
