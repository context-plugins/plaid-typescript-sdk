import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryExpensesSchema, type CategoryExpenses } from "./category-expenses.js";
import { monthlyAverageSchema, type MonthlyAverage } from "./monthly-average.js";
import { monthlySummarySchema, type MonthlySummary } from "./monthly-summary.js";

/**
 * Insights into bank penalties and fees, including overdraft fees, NSF fees, and other bank-imposed
 * charges.
 */
export type BankPenaltiesIndicators = {
  /**
   * The total value of outflow transactions categorized as `BANK_PENALTIES`, across all the
   * accounts in the report within the requested time window.
   */
  amount?: number | null;
  /**
   * The ISO-4217 currency code of the amount. Always `null` if `unofficial_currency_code` is
   * non-`null`.
   */
  isoCurrencyCode?: string | null;
  /**
   * The unofficial currency code associated with the amount. Always `null` if `iso_currency_code`
   * is non-`null`.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode?: string | null;
  /**
   * The monthly average amount calculated by dividing the total by the number of calendar months in
   * the time period.
   */
  monthlyAverage?: MonthlyAverage | null;
  /**
   * Detailed categories view of all the transactions that fall into the `BANK_PENALTIES` credit
   * category within the given time window, across all the accounts in the report.
   */
  categoryDetails?: (CategoryExpenses | null)[];
  /**
   * The total number of transactions that fall into the `BANK_PENALTIES` credit category, across
   * all the accounts in the report.
   */
  transactionsCount?: number | null;
  /**
   * The monthly summaries of the transactions that fall into the `BANK_PENALTIES` credit category
   * within the given time window, across all the accounts in the report.
   */
  monthlySummaries?: (MonthlySummary | null)[];
  /**
   * The number of days since the last transaction that falls into the `BANK_PENALTIES` credit
   * category, across all the accounts in the report.
   */
  daysSinceLastOccurrence?: number | null;
  /**
   * The percentage of the user's monthly inflows that was spent on transactions that fall into the
   * `BANK_PENALTIES` credit category within the given time window, across all the accounts in the
   * report. For example, a value of 100 represents that 100% of the inflows were spent on
   * transactions that fall into the `BANK_PENALTIES` credit category. If there's no available
   * income for the given time period, this field value will be `-1`.
   */
  percentageOfIncome?: number | null;
};

export const bankPenaltiesIndicatorsSchema: Schema<BankPenaltiesIndicators> =
  s.object<BankPenaltiesIndicators>({
    amount: s.optionalNullable(s.float64()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    unofficialCurrencyCode: s.optionalNullable(s.string()),
    monthlyAverage: s.optionalNullable(s.lazy(() => monthlyAverageSchema)),
    categoryDetails: s.optional(s.array(s.nullable(s.lazy(() => categoryExpensesSchema)))),
    transactionsCount: s.optionalNullable(s.int()),
    monthlySummaries: s.optional(s.array(s.nullable(s.lazy(() => monthlySummarySchema)))),
    daysSinceLastOccurrence: s.optionalNullable(s.int()),
    percentageOfIncome: s.optionalNullable(s.float64()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      monthlyAverage: "monthly_average",
      categoryDetails: "category_details",
      transactionsCount: "transactions_count",
      monthlySummaries: "monthly_summaries",
      daysSinceLastOccurrence: "days_since_last_occurrence",
      percentageOfIncome: "percentage_of_income",
    },
  });
