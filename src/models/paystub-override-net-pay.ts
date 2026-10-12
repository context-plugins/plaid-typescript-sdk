import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An object representing information about the net pay amount on the paystub. */
export type PaystubOverrideNetPay = {
  /** Description of the net pay */
  description?: string | null;
  /** The ISO-4217 currency code of the net pay. */
  currency?: string | null;
  /** The year-to-date amount of the net pay */
  ytdAmount?: number | null;
};

export const paystubOverrideNetPaySchema: Schema<PaystubOverrideNetPay> = s.object<PaystubOverrideNetPay>({
  description: s.optionalNullable(s.string()),
  currency: s.optionalNullable(s.string()),
  ytdAmount: s.optionalNullable(s.float64()),
  _keysMap: {
    ytdAmount: "ytd_amount",
  },
});
