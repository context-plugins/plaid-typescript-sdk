import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountWithCurrencySchema, type AmountWithCurrency } from "./amount-with-currency.js";
import { categoryExpensesSchema, type CategoryExpenses } from "./category-expenses.js";

/**
 * Insights into unusually large transactions that exceed typical spending patterns for the account.
 */
export type OutlierTransactionsInsights = {
  /**
   * The total number of transactions whose value is above the threshold of normal amounts for a
   * given account.
   */
  transactionsCount?: number | null;
  /**
   * A monetary amount with its associated currency information, supporting both official and
   * unofficial currency codes.
   */
  totalAmount?: AmountWithCurrency | null;
  /** Up to 3 top categories of expenses in this group. */
  topCategories?: (CategoryExpenses | null)[];
};

export const outlierTransactionsInsightsSchema: Schema<OutlierTransactionsInsights> =
  s.object<OutlierTransactionsInsights>({
    transactionsCount: s.optionalNullable(s.int()),
    totalAmount: s.optionalNullable(s.lazy(() => amountWithCurrencySchema)),
    topCategories: s.optional(s.array(s.nullable(s.lazy(() => categoryExpensesSchema)))),
    _keysMap: {
      transactionsCount: "transactions_count",
      totalAmount: "total_amount",
      topCategories: "top_categories",
    },
  });
