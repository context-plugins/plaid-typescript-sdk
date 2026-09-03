import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AmountWithCurrencyWithMonthlyAverage = {
  amount?: number | null;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
};

export const amountWithCurrencyWithMonthlyAverageSchema: Schema<AmountWithCurrencyWithMonthlyAverage> =
  s.object<AmountWithCurrencyWithMonthlyAverage>({
    amount: s.optionalNullable(s.number()),
    isoCurrencyCode: s.optionalNullable(s.string()),
    unofficialCurrencyCode: s.optionalNullable(s.string()),
    _keysMap: {
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
    },
  });
