import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  earningsBreakdownCanonicalDescriptionSchema,
  type EarningsBreakdownCanonicalDescription,
} from "./earnings-breakdown-canonical-description.js";

export type EarningsBreakdown = {
  canonicalDescription?: EarningsBreakdownCanonicalDescription | null;
  currentAmount?: number | null;
  description?: string | null;
  hours?: number | null;
  isoCurrencyCode?: string | null;
  rate?: number | null;
  unofficialCurrencyCode?: string | null;
  ytdAmount?: number | null;
};

export const earningsBreakdownSchema: Schema<EarningsBreakdown> = s.object<EarningsBreakdown>({
  canonicalDescription: s.optionalNullable(s.lazy(() => earningsBreakdownCanonicalDescriptionSchema)),
  currentAmount: s.optionalNullable(s.number()),
  description: s.optionalNullable(s.string()),
  hours: s.optionalNullable(s.number()),
  isoCurrencyCode: s.optionalNullable(s.string()),
  rate: s.optionalNullable(s.number()),
  unofficialCurrencyCode: s.optionalNullable(s.string()),
  ytdAmount: s.optionalNullable(s.number()),
  _keysMap: {
    canonicalDescription: "canonical_description",
    currentAmount: "current_amount",
    isoCurrencyCode: "iso_currency_code",
    unofficialCurrencyCode: "unofficial_currency_code",
    ytdAmount: "ytd_amount",
  },
});
