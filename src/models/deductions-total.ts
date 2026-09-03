import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeductionsTotal = {
  currentAmount?: number | null;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
  ytdAmount?: number | null;
};

export const deductionsTotalSchema: Schema<DeductionsTotal> = s.object<DeductionsTotal>({
  currentAmount: s.optionalNullable(s.number()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  ytdAmount: s.optionalNullable(s.number()),
  _keysMap: {
    currentAmount: "current_amount",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    ytdAmount: "ytd_amount",
  },
});
