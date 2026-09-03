import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";
import {
  creditBankIncomeHistoricalSummarySchema,
  type CreditBankIncomeHistoricalSummary,
} from "./credit-bank-income-historical-summary.js";

export type CreditBankIncomeSummary = {
  totalAmount?: number;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
  totalAmounts?: CreditAmountWithCurrency[];
  startDate?: string;
  endDate?: string;
  incomeSourcesCount?: number;
  incomeCategoriesCount?: number;
  incomeTransactionsCount?: number;
  historicalSummary?: CreditBankIncomeHistoricalSummary[];
};

export const creditBankIncomeSummarySchema: Schema<CreditBankIncomeSummary> =
  s.object<CreditBankIncomeSummary>({
    totalAmount: s.optional(s.number()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    unofficialCurrencyCode: s.optionalNullable(s.string()),
    totalAmounts: s.optional(s.array(s.lazy(() => creditAmountWithCurrencySchema))),
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    incomeSourcesCount: s.optional(s.number()),
    incomeCategoriesCount: s.optional(s.number()),
    incomeTransactionsCount: s.optional(s.number()),
    historicalSummary: s.optional(s.array(s.lazy(() => creditBankIncomeHistoricalSummarySchema))),
    _keysMap: {
      totalAmount: "total_amount",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      totalAmounts: "total_amounts",
      startDate: "start_date",
      endDate: "end_date",
      incomeSourcesCount: "income_sources_count",
      incomeCategoriesCount: "income_categories_count",
      incomeTransactionsCount: "income_transactions_count",
      historicalSummary: "historical_summary",
    },
  });
