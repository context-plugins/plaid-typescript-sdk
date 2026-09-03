import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaystubOverrideNetPay = {
  description?: string | null;
  currency?: string | null;
  ytdAmount?: number | null;
};

export const paystubOverrideNetPaySchema: Schema<PaystubOverrideNetPay> = s.object<PaystubOverrideNetPay>({
  description: s.optionalNullable(s.string()),
  currency: s.optionalNullable(s.string()),
  ytdAmount: s.optionalNullable(s.number()),
  _keysMap: {
    ytdAmount: "ytd_amount",
  },
});
