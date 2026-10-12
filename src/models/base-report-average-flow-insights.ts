import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";

/**
 * Average dollar amount of credit or debit transactions out of the account. This field will only be
 * included for depository accounts.
 */
export type BaseReportAverageFlowInsights = {
  /**
   * The start date of this time period. The date will be returned in an ISO 8601 format
   * (YYYY-MM-DD).
   */
  startDate: string;
  /**
   * The end date of this time period. The date will be returned in an ISO 8601 format (YYYY-MM-DD).
   */
  endDate: string;
  /**
   * This contains an amount, denominated in the currency specified by either `iso_currency_code` or
   * `unofficial_currency_code`
   */
  totalAmount: CreditAmountWithCurrency;
};

export const baseReportAverageFlowInsightsSchema: Schema<BaseReportAverageFlowInsights> =
  s.object<BaseReportAverageFlowInsights>({
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    totalAmount: creditAmountWithCurrencySchema,
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      totalAmount: "total_amount",
    },
  });
