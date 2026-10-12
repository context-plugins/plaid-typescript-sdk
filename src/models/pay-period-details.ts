import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { distributionBreakdownSchema, type DistributionBreakdown } from "./distribution-breakdown.js";
import {
  payPeriodDetailsPayFrequencySchema,
  type PayPeriodDetailsPayFrequency,
} from "./pay-period-details-pay-frequency.js";

/** Details about the pay period. */
export type PayPeriodDetails = {
  /** The amount of the paycheck. */
  checkAmount?: number | null;
  distributionBreakdown?: DistributionBreakdown[];
  /**
   * The pay period end date, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format:
   * "yyyy-mm-dd".
   */
  endDate?: string | null;
  /** Total earnings before tax/deductions. */
  grossEarnings?: number | null;
  /**
   * The date on which the paystub was issued, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format ("yyyy-mm-dd").
   */
  payDate?: string | null;
  /** The frequency at which an individual is paid. */
  payFrequency?: PayPeriodDetailsPayFrequency | null;
  /**
   * The date on which the paystub was issued, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601)
   * format ("yyyy-mm-dd").
   *
   * @deprecated
   */
  payDay?: string | null;
  /**
   * The pay period start date, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format:
   * "yyyy-mm-dd".
   */
  startDate?: string | null;
};

export const payPeriodDetailsSchema: Schema<PayPeriodDetails> = s.object<PayPeriodDetails>({
  checkAmount: s.optionalNullable(s.float64()),
  distributionBreakdown: s.optional(s.array(s.lazy(() => distributionBreakdownSchema))),
  endDate: s.optionalNullable(s.dateOnly()),
  grossEarnings: s.optionalNullable(s.float64()),
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
