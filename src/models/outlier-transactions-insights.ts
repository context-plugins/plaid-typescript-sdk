import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountWithCurrencySchema, type AmountWithCurrency } from "./amount-with-currency.js";
import { categoryExpensesSchema, type CategoryExpenses } from "./category-expenses.js";

export type OutlierTransactionsInsights = {
  transactionsCount?: number | null;
  totalAmount?: AmountWithCurrency | null;
  topCategories?: (CategoryExpenses | null)[];
};

export const outlierTransactionsInsightsSchema: Schema<OutlierTransactionsInsights> =
  s.object<OutlierTransactionsInsights>({
    transactionsCount: s.optionalNullable(s.number()),
    totalAmount: s.optionalNullable(s.lazy(() => amountWithCurrencySchema)),
    topCategories: s.optional(s.array(s.nullable(s.lazy(() => categoryExpensesSchema)))),
    _keysMap: {
      transactionsCount: "transactions_count",
      totalAmount: "total_amount",
      topCategories: "top_categories",
    },
  });
