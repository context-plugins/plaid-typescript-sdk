import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountWithCurrencySchema, type AmountWithCurrency } from "./amount-with-currency.js";

/**
 * Details about a specific occurrence of a negative balance period, including start and end dates.
 */
export type NegativeBalanceOccurrence = {
  /**
   * The date of the first transaction that caused the account to have a negative balance. The date
   * will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  startDate?: string | null;
  /**
   * The date of the last transaction that caused the account to have a negative balance. The date
   * will be returned in an ISO 8601 format (YYYY-MM-DD). This date is inclusive, meaning that this
   * was the last date that the account had a negative balance.
   */
  endDate?: string | null;
  /**
   * A monetary amount with its associated currency information, supporting both official and
   * unofficial currency codes.
   */
  minimumBalance?: AmountWithCurrency | null;
};

export const negativeBalanceOccurrenceSchema: Schema<NegativeBalanceOccurrence> =
  s.object<NegativeBalanceOccurrence>({
    startDate: s.optionalNullable(s.dateOnly()),
    endDate: s.optionalNullable(s.dateOnly()),
    minimumBalance: s.optionalNullable(s.lazy(() => amountWithCurrencySchema)),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      minimumBalance: "minimum_balance",
    },
  });
