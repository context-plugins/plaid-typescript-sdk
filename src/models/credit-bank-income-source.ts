import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeCategorySchema,
  type CreditBankIncomeCategory,
} from "./credit-bank-income-category.js";
import {
  creditBankIncomeHistoricalSummarySchema,
  type CreditBankIncomeHistoricalSummary,
} from "./credit-bank-income-historical-summary.js";
import {
  creditBankIncomePayFrequencySchema,
  type CreditBankIncomePayFrequency,
} from "./credit-bank-income-pay-frequency.js";

export type CreditBankIncomeSource = {
  incomeSourceId?: string;
  incomeDescription?: string;
  incomeCategory?: CreditBankIncomeCategory;
  accountId?: string;
  startDate?: string;
  endDate?: string;
  payFrequency?: CreditBankIncomePayFrequency;
  totalAmount?: number;
  transactionCount?: number;
  historicalSummary?: CreditBankIncomeHistoricalSummary[];
};

export const creditBankIncomeSourceSchema: Schema<CreditBankIncomeSource> = s.object<CreditBankIncomeSource>({
  incomeSourceId: s.optional(s.string()),
  incomeDescription: s.optional(s.string()),
  incomeCategory: s.optional(s.lazy(() => creditBankIncomeCategorySchema)),
  accountId: s.optional(s.string()),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  payFrequency: s.optional(s.lazy(() => creditBankIncomePayFrequencySchema)),
  totalAmount: s.optional(s.number()),
  transactionCount: s.optional(s.number()),
  historicalSummary: s.optional(s.array(s.lazy(() => creditBankIncomeHistoricalSummarySchema))),
  _keysMap: {
    incomeSourceId: "income_source_id",
    incomeDescription: "income_description",
    incomeCategory: "income_category",
    accountId: "account_id",
    startDate: "start_date",
    endDate: "end_date",
    payFrequency: "pay_frequency",
    totalAmount: "total_amount",
    transactionCount: "transaction_count",
    historicalSummary: "historical_summary",
  },
});
