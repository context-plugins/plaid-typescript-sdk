import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountWithCurrencySchema, type AmountWithCurrency } from "./amount-with-currency.js";

/** Monthly summary of transactions within a specific time period, showing aggregated amounts. */
export type MonthlySummary = {
  /**
   * The start date of the month for the given report time window. Will be provided in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  startDate?: string | null;
  /**
   * The end date of the month for the given report time window. Will be provided in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  endDate?: string | null;
  /**
   * A monetary amount with its associated currency information, supporting both official and
   * unofficial currency codes.
   */
  totalAmount?: AmountWithCurrency | null;
};

export const monthlySummarySchema: Schema<MonthlySummary> = s.object<MonthlySummary>({
  startDate: s.optionalNullable(s.dateOnly()),
  endDate: s.optionalNullable(s.dateOnly()),
  totalAmount: s.optionalNullable(s.lazy(() => amountWithCurrencySchema)),
  _keysMap: {
    startDate: "start_date",
    endDate: "end_date",
    totalAmount: "total_amount",
  },
});
