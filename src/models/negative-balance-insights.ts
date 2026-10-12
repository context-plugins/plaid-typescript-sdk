import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountWithCurrencySchema, type AmountWithCurrency } from "./amount-with-currency.js";
import {
  negativeBalanceOccurrenceSchema,
  type NegativeBalanceOccurrence,
} from "./negative-balance-occurrence.js";

/**
 * Insights into negative balance occurrences, including frequency, duration, and minimum balance
 * details.
 */
export type NegativeBalanceInsights = {
  /**
   * The number of days since the last transaction that caused any account in the report to have a
   * negative balance.
   *
   * This value is inclusive of the date of the last negative balance, meaning that if the last
   * negative balance occurred today, this value will be `0`.
   */
  daysSinceLastOccurrence?: number | null;
  /**
   * The number of aggregated days that the accounts in the report has had a negative balance within
   * the given time window.
   */
  daysWithNegativeBalance?: number | null;
  /**
   * A monetary amount with its associated currency information, supporting both official and
   * unofficial currency codes.
   */
  minimumBalance?: AmountWithCurrency | null;
  /**
   * The summary of the negative balance occurrences for this account.
   *
   * If the user has not had a negative balance in the account in the given time window, this list
   * will be empty.
   */
  occurrences?: (NegativeBalanceOccurrence | null)[];
};

export const negativeBalanceInsightsSchema: Schema<NegativeBalanceInsights> =
  s.object<NegativeBalanceInsights>({
    daysSinceLastOccurrence: s.optionalNullable(s.int()),
    daysWithNegativeBalance: s.optionalNullable(s.int()),
    minimumBalance: s.optionalNullable(s.lazy(() => amountWithCurrencySchema)),
    occurrences: s.optional(s.array(s.nullable(s.lazy(() => negativeBalanceOccurrenceSchema)))),
    _keysMap: {
      daysSinceLastOccurrence: "days_since_last_occurrence",
      daysWithNegativeBalance: "days_with_negative_balance",
      minimumBalance: "minimum_balance",
    },
  });
