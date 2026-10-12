import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  earningsBreakdownCanonicalDescriptionSchema,
  type EarningsBreakdownCanonicalDescription,
} from "./earnings-breakdown-canonical-description.js";

/** An object representing the earnings line items for the pay period. */
export type PaystubOverrideEarningsBreakdown = {
  /** Commonly used term to describe the earning line item. */
  canonicalDescription?: EarningsBreakdownCanonicalDescription | null;
  /** Raw amount of the earning line item. */
  currentAmount?: number | null;
  /** Description of the earning line item. */
  description?: string | null;
  /** Number of hours applicable for this earning. */
  hours?: number | null;
  /** The ISO-4217 currency code of the line item. */
  currency?: string | null;
  /** Hourly rate applicable for this earning. */
  rate?: number | null;
  /** The year-to-date amount of the line item. */
  ytdAmount?: number | null;
};

export const paystubOverrideEarningsBreakdownSchema: Schema<PaystubOverrideEarningsBreakdown> =
  s.object<PaystubOverrideEarningsBreakdown>({
    canonicalDescription: s.optionalNullable(s.lazy(() => earningsBreakdownCanonicalDescriptionSchema)),
    currentAmount: s.optionalNullable(s.float64()),
    description: s.optionalNullable(s.string()),
    hours: s.optionalNullable(s.float64()),
    currency: s.optionalNullable(s.string()),
    rate: s.optionalNullable(s.float64()),
    ytdAmount: s.optionalNullable(s.float64()),
    _keysMap: {
      canonicalDescription: "canonical_description",
      currentAmount: "current_amount",
      ytdAmount: "ytd_amount",
    },
  });
