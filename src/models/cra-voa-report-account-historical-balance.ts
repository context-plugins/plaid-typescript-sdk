import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing a balance held by an account in the past. */
export type CraVoaReportAccountHistoricalBalance = {
  /**
   * The total amount of funds in the account, calculated from the `current` balance in the
   * `balance` object by subtracting inflows and adding back outflows according to the posted date
   * of each transaction.
   */
  current: number;
  /**
   * The date of the calculated historical balance, in an [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
   */
  date: string;
  /**
   * The ISO-4217 currency code of the balance. Always `null` if `unofficial_currency_code` is
   * non-`null`.
   */
  isoCurrencyCode: string | null;
  /**
   * The unofficial currency code associated with the balance. Always `null` if `iso_currency_code`
   * is non-`null`.
   *
   * See the [currency code schema](https://plaid.com/docs/api/accounts#currency-code-schema) for a
   * full listing of supported `unofficial_currency_code`s.
   */
  unofficialCurrencyCode: string | null;
};

export const craVoaReportAccountHistoricalBalanceSchema: Schema<CraVoaReportAccountHistoricalBalance> =
  s.object<CraVoaReportAccountHistoricalBalance>({
    current: s.float64(),
    date: s.dateOnly(),
    isoCurrencyCode: s.nullable(s.string()),
    unofficialCurrencyCode: s.nullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
