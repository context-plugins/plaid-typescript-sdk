import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditAmountWithCurrencySchema,
  type CreditAmountWithCurrency,
} from "./credit-amount-with-currency.js";

/** Average balance in dollar amount per month */
export type BaseReportAverageMonthlyBalances = {
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
  averageBalance: CreditAmountWithCurrency;
};

export const baseReportAverageMonthlyBalancesSchema: Schema<BaseReportAverageMonthlyBalances> =
  s.object<BaseReportAverageMonthlyBalances>({
    startDate: s.string(),
    endDate: s.string(),
    averageBalance: creditAmountWithCurrencySchema,
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      averageBalance: "average_balance",
    },
  });
