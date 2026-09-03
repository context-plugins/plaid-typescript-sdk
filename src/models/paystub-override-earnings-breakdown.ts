import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  earningsBreakdownCanonicalDescriptionSchema,
  type EarningsBreakdownCanonicalDescription,
} from "./earnings-breakdown-canonical-description.js";

export type PaystubOverrideEarningsBreakdown = {
  canonicalDescription?: EarningsBreakdownCanonicalDescription | null;
  currentAmount?: number | null;
  description?: string | null;
  hours?: number | null;
  currency?: string | null;
  rate?: number | null;
  ytdAmount?: number | null;
};

export const paystubOverrideEarningsBreakdownSchema: Schema<PaystubOverrideEarningsBreakdown> =
  s.object<PaystubOverrideEarningsBreakdown>({
    canonicalDescription: s.optionalNullable(s.lazy(() => earningsBreakdownCanonicalDescriptionSchema)),
    currentAmount: s.optionalNullable(s.number()),
    description: s.optionalNullable(s.string()),
    hours: s.optionalNullable(s.number()),
    currency: s.optionalNullable(s.string()),
    rate: s.optionalNullable(s.number()),
    ytdAmount: s.optionalNullable(s.number()),
    _keysMap: {
      canonicalDescription: "canonical_description",
      currentAmount: "current_amount",
      ytdAmount: "ytd_amount",
    },
  });
