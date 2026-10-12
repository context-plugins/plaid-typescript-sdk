import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount of income earned year to date, as based on paystub data. */
export type PaystubYtdDetails = {
  /** Year-to-date gross earnings. */
  grossEarnings?: number | null;
  /** Year-to-date net (take home) earnings. */
  netEarnings?: number | null;
};

export const paystubYtdDetailsSchema: Schema<PaystubYtdDetails> = s.object<PaystubYtdDetails>({
  grossEarnings: s.optionalNullable(s.float64()),
  netEarnings: s.optionalNullable(s.float64()),
  _keysMap: {
    grossEarnings: "gross_earnings",
    netEarnings: "net_earnings",
  },
});
