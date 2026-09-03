import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MonthlyAverage = {
  amount?: number | null;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
};

export const monthlyAverageSchema: Schema<MonthlyAverage> = s.object<MonthlyAverage>({
  amount: s.optionalNullable(s.number()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
  },
});
