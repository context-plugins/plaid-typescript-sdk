import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  payPeriodDetailsPayFrequencySchema,
  type PayPeriodDetailsPayFrequency,
} from "./pay-period-details-pay-frequency.js";
import {
  paystubOverrideDistributionBreakdownSchema,
  type PaystubOverrideDistributionBreakdown,
} from "./paystub-override-distribution-breakdown.js";

export type PaystubOverridePayPeriodDetails = {
  checkAmount?: number | null;
  distributionBreakdown?: PaystubOverrideDistributionBreakdown[];
  endDate?: string | null;
  grossEarnings?: number | null;
  payDate?: string | null;
  payFrequency?: PayPeriodDetailsPayFrequency | null;
  payDay?: string | null;
  startDate?: string | null;
};

export const paystubOverridePayPeriodDetailsSchema: Schema<PaystubOverridePayPeriodDetails> =
  s.object<PaystubOverridePayPeriodDetails>({
    checkAmount: s.optionalNullable(s.number()),
    distributionBreakdown: s.optional(s.array(s.lazy(() => paystubOverrideDistributionBreakdownSchema))),
    endDate: s.optionalNullable(s.dateOnly()),
    grossEarnings: s.optionalNullable(s.number()),
    payDate: s.optionalNullable(s.dateOnly()),
    payFrequency: s.optionalNullable(s.lazy(() => payPeriodDetailsPayFrequencySchema)),
    payDay: s.optionalNullable(s.dateOnly()),
    startDate: s.optionalNullable(s.dateOnly()),
    _keysMap: {
      checkAmount: "check_amount",
      distributionBreakdown: "distribution_breakdown",
      endDate: "end_date",
      grossEarnings: "gross_earnings",
      payDate: "pay_date",
      payFrequency: "pay_frequency",
      payDay: "pay_day",
      startDate: "start_date",
    },
  });
