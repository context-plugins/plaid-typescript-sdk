import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paystubPayFrequencySchema, type PaystubPayFrequency } from "./paystub-pay-frequency.js";

export type PaystubDetails = {
  payPeriodStartDate?: string | null;
  payPeriodEndDate?: string | null;
  payDate?: string | null;
  paystubProvider?: string | null;
  payFrequency?: PaystubPayFrequency | null;
};

export const paystubDetailsSchema: Schema<PaystubDetails> = s.object<PaystubDetails>({
  payPeriodStartDate: s.optionalNullable(s.dateOnly()),
  payPeriodEndDate: s.optionalNullable(s.dateOnly()),
  payDate: s.optionalNullable(s.dateOnly()),
  paystubProvider: s.optionalNullable(s.string()),
  payFrequency: s.optionalNullable(s.lazy(() => paystubPayFrequencySchema)),
  _keysMap: {
    payPeriodStartDate: "pay_period_start_date",
    payPeriodEndDate: "pay_period_end_date",
    payDate: "pay_date",
    paystubProvider: "paystub_provider",
    payFrequency: "pay_frequency",
  },
});
