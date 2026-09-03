import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaystubYtdDetails = {
  grossEarnings?: number | null;
  netEarnings?: number | null;
};

export const paystubYtdDetailsSchema: Schema<PaystubYtdDetails> = s.object<PaystubYtdDetails>({
  grossEarnings: s.optionalNullable(s.number()),
  netEarnings: s.optionalNullable(s.number()),
  _keysMap: {
    grossEarnings: "gross_earnings",
    netEarnings: "net_earnings",
  },
});
