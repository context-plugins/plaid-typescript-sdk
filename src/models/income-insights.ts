import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  amountWithCurrencyWithMonthlyAverageSchema,
  type AmountWithCurrencyWithMonthlyAverage,
} from "./amount-with-currency-with-monthly-average.js";
import { amountWithCurrencySchema, type AmountWithCurrency } from "./amount-with-currency.js";

export type IncomeInsights = {
  totalIncome?: AmountWithCurrency | null;
  incomeExcludingTransfers?: AmountWithCurrencyWithMonthlyAverage | null;
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
