import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craBankIncomeEmployerSchema, type CraBankIncomeEmployer } from "./cra-bank-income-employer.js";
import {
  craBankIncomeHistoricalSummarySchema,
  type CraBankIncomeHistoricalSummary,
} from "./cra-bank-income-historical-summary.js";
import {
  craBankIncomeIncomeProviderSchema,
  type CraBankIncomeIncomeProvider,
} from "./cra-bank-income-income-provider.js";
import { craBankIncomeStatusSchema, type CraBankIncomeStatus } from "./cra-bank-income-status.js";
import { craPredictionIntervalSchema, type CraPredictionInterval } from "./cra-prediction-interval.js";
import {
  creditBankIncomeCategorySchema,
  type CreditBankIncomeCategory,
} from "./credit-bank-income-category.js";
import {
  creditBankIncomePayFrequencySchema,
  type CreditBankIncomePayFrequency,
} from "./credit-bank-income-pay-frequency.js";

export type CraBankIncomeSource = {
  accountId?: string;
  incomeSourceId?: string;
  incomeDescription?: string;
  incomeCategory?: CreditBankIncomeCategory;
  startDate?: string;
  endDate?: string;
  payFrequency?: CreditBankIncomePayFrequency;
  totalAmount?: number;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
  transactionCount?: number;
  nextPaymentDate?: string | null;
  status?: CraBankIncomeStatus;
  historicalAverageMonthlyGrossIncome?: number | null;
  historicalAverageMonthlyIncome?: number | null;
  forecastedAverageMonthlyIncome?: number | null;
  forecastedAverageMonthlyIncomePredictionIntervals: CraPredictionInterval[];
  employer?: CraBankIncomeEmployer;
  incomeProvider: CraBankIncomeIncomeProvider | null;
  historicalSummary?: CraBankIncomeHistoricalSummary[];
};

export const craBankIncomeSourceSchema: Schema<CraBankIncomeSource> = s.object<CraBankIncomeSource>({
  accountId: s.optional(s.string()),
  incomeSourceId: s.optional(s.string()),
  incomeDescription: s.optional(s.string()),
  incomeCategory: s.optional(s.lazy(() => creditBankIncomeCategorySchema)),
  startDate: s.optional(s.dateOnly()),
  endDate: s.optional(s.dateOnly()),
  payFrequency: s.optional(s.lazy(() => creditBankIncomePayFrequencySchema)),
  totalAmount: s.optional(s.number()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  transactionCount: s.optional(s.number()),
  nextPaymentDate: s.optionalNullable(s.dateOnly()),
  status: s.optional(s.lazy(() => craBankIncomeStatusSchema)),
  historicalAverageMonthlyGrossIncome: s.optionalNullable(s.number()),
  historicalAverageMonthlyIncome: s.optionalNullable(s.number()),
  forecastedAverageMonthlyIncome: s.optionalNullable(s.number()),
  forecastedAverageMonthlyIncomePredictionIntervals: s.array(s.lazy(() => craPredictionIntervalSchema)),
  employer: s.optional(s.lazy(() => craBankIncomeEmployerSchema)),
  incomeProvider: s.nullable(s.lazy(() => craBankIncomeIncomeProviderSchema)),
  historicalSummary: s.optional(s.array(s.lazy(() => craBankIncomeHistoricalSummarySchema))),
  _keysMap: {
    accountId: "account_id",
    incomeSourceId: "income_source_id",
    incomeDescription: "income_description",
    incomeCategory: "income_category",
    startDate: "start_date",
    endDate: "end_date",
    payFrequency: "pay_frequency",
    totalAmount: "total_amount",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    transactionCount: "transaction_count",
    nextPaymentDate: "next_payment_date",
    historicalAverageMonthlyGrossIncome: "historical_average_monthly_gross_income",
    historicalAverageMonthlyIncome: "historical_average_monthly_income",
    forecastedAverageMonthlyIncome: "forecasted_average_monthly_income",
    forecastedAverageMonthlyIncomePredictionIntervals:
      "forecasted_average_monthly_income_prediction_intervals",
    incomeProvider: "income_provider",
    historicalSummary: "historical_summary",
  },
});
