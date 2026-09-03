import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeductionsBreakdown = {
  currentAmount?: number | null;
  description?: string | null;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
  ytdAmount?: number | null;
};

export const deductionsBreakdownSchema: Schema<DeductionsBreakdown> = s.object<DeductionsBreakdown>({
  currentAmount: s.optionalNullable(s.number()),
  description: s.optionalNullable(s.string()),
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
