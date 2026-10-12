import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  amountWithCurrencyWithMonthlyAverageSchema,
  type AmountWithCurrencyWithMonthlyAverage,
} from "./amount-with-currency-with-monthly-average.js";
import { amountWithCurrencySchema, type AmountWithCurrency } from "./amount-with-currency.js";

/**
 * Comprehensive income analysis including total income, income excluding transfers, and inbound
 * transfer amounts.
 */
export type IncomeInsights = {
  /** The total amount of all income transactions in the given time period. */
  totalIncome?: AmountWithCurrency | null;
  /** Income excluding account transfer transactions for the period, including a monthly average. */
  incomeExcludingTransfers?: AmountWithCurrencyWithMonthlyAverage | null;
  /** Sum of inbound transfer transactions for the period, including a monthly average. */
  transfersIn?: AmountWithCurrencyWithMonthlyAverage | null;
};

export const incomeInsightsSchema: Schema<IncomeInsights> = s.object<IncomeInsights>({
  totalIncome: s.optionalNullable(s.lazy(() => amountWithCurrencySchema)),
  incomeExcludingTransfers: s.optionalNullable(s.lazy(() => amountWithCurrencyWithMonthlyAverageSchema)),
  transfersIn: s.optionalNullable(s.lazy(() => amountWithCurrencyWithMonthlyAverageSchema)),
  _keysMap: {
    totalIncome: "total_income",
    incomeExcludingTransfers: "income_excluding_transfers",
    transfersIn: "transfers_in",
  },
});
