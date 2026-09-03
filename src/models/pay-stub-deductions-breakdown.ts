import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayStubDeductionsBreakdown = {
  currentAmount: number | null;
  description: string | null;
  isoCurrencyCode: string | null;
  unofficialCurrencyCode: string | null;
  ytdAmount: number | null;
};

export const payStubDeductionsBreakdownSchema: Schema<PayStubDeductionsBreakdown> =
  s.object<PayStubDeductionsBreakdown>({
    currentAmount: s.nullable(s.number()),
    description: s.nullable(s.string()),
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
