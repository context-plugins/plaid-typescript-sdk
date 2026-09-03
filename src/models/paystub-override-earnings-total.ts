import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaystubOverrideEarningsTotal = {
  hours?: number | null;
  currency?: string | null;
  ytdAmount?: number | null;
};

export const paystubOverrideEarningsTotalSchema: Schema<PaystubOverrideEarningsTotal> =
  s.object<PaystubOverrideEarningsTotal>({
    hours: s.optionalNullable(s.number()),
    currency: s.optionalNullable(s.string()),
    ytdAmount: s.optionalNullable(s.number()),
    _keysMap: {
      ytdAmount: "ytd_amount",
    },
  });
