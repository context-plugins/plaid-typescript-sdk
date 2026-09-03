import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayStubEarningsTotal = {
  currentAmount: number | null;
  hours: number | null;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  ytdAmount: number | null;
};

export const payStubEarningsTotalSchema: Schema<PayStubEarningsTotal> = s.object<PayStubEarningsTotal>({
  currentAmount: s.nullable(s.number()),
  hours: s.nullable(s.number()),
  isoCurrencyCode: s.nullable(s.string()),
  unofficialCurrencyCode: s.nullable(s.string()),
  ytdAmount: s.nullable(s.number()),
  _keysMap: {
    currentAmount: "current_amount",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    ytdAmount: "ytd_amount",
  },
});
