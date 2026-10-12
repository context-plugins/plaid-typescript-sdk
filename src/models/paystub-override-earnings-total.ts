import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An object representing both the current pay period and year to date amount for an earning
 * category.
 */
export type PaystubOverrideEarningsTotal = {
  /** Total number of hours worked for this pay period */
  hours?: number | null;
  /** The ISO-4217 currency code of the line item */
  currency?: string | null;
  /** The year-to-date amount for the total earnings */
  ytdAmount?: number | null;
};

export const paystubOverrideEarningsTotalSchema: Schema<PaystubOverrideEarningsTotal> =
  s.object<PaystubOverrideEarningsTotal>({
    hours: s.optionalNullable(s.float64()),
    currency: s.optionalNullable(s.string()),
    ytdAmount: s.optionalNullable(s.float64()),
    _keysMap: {
      ytdAmount: "ytd_amount",
    },
  });
