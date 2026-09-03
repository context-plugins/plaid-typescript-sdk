import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paySchema, type Pay } from "./pay.js";

export type EarningsTotal = {
  currentAmount?: number | null;
  currentPay?: Pay;
  ytdPay?: Pay;
  hours?: number | null;
  isoCurrencyCode?: string | null;
  unofficialCurrencyCode?: string | null;
  ytdAmount?: number | null;
};

export const earningsTotalSchema: Schema<EarningsTotal> = s.object<EarningsTotal>({
  currentAmount: s.optionalNullable(s.number()),
  currentPay: s.optional(s.lazy(() => paySchema)),
  ytdPay: s.optional(s.lazy(() => paySchema)),
  hours: s.optionalNullable(s.number()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  ytdAmount: s.optionalNullable(s.number()),
  _keysMap: {
    currentAmount: "current_amount",
    currentPay: "current_pay",
    ytdPay: "ytd_pay",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    ytdAmount: "ytd_amount",
  },
});
