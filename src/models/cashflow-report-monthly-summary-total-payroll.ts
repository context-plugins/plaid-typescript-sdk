import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The total amount of all payroll transactions during this month. */
export type CashflowReportMonthlySummaryTotalPayroll = {
  /** Value of amount with up to 2 decimal places. */
  amount: number;
  /**
   * The ISO-4217 currency code of the amount. Always `null` if `unofficial_currency_code` is
   * non-`null`
   */
  isoCurrencyCode: string | null;
  /**
   * The unofficial currency code of the amount. Always `null` if `iso_currency_code` is non-`null`.
   * Unofficial currency codes are used for currencies that do not have official ISO currency codes,
   * such as cryptocurrencies and the currencies of certain countries.
   */
  unofficialCurrencyCode: string | null;
};

export const cashflowReportMonthlySummaryTotalPayrollSchema: Schema<CashflowReportMonthlySummaryTotalPayroll> =
  s.object<CashflowReportMonthlySummaryTotalPayroll>({
    amount: s.float64(),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
