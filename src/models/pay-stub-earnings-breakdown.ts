import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PayStubEarningsBreakdown = {
  canonicalDescription: string | null;
  currentAmount: number | null;
  description: string | null;
  hours: number | null;
  isoCurrencyCode: string | null;
  rate: number | null;
  unofficialCurrencyCode: string | null;
  ytdAmount: number | null;
};

export const payStubEarningsBreakdownSchema: Schema<PayStubEarningsBreakdown> =
  s.object<PayStubEarningsBreakdown>({
    canonicalDescription: s.nullable(s.string()),
    currentAmount: s.nullable(s.number()),
    description: s.nullable(s.string()),
    hours: s.nullable(s.number()),
    isoCurrencyCode: s.nullable(s.string()),
    rate: s.nullable(s.number()),
    unofficialCurrencyCode: s.nullable(s.string()),
    ytdAmount: s.nullable(s.number()),
    _keysMap: {
      canonicalDescription: "canonical_description",
      currentAmount: "current_amount",
      isoCurrencyCode: "iso_currency_code",
      unofficialCurrencyCode: "unofficial_currency_code",
      ytdAmount: "ytd_amount",
    },
  });
