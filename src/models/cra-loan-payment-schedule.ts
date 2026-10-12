import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The frequency of a loan's payment schedule. `BIWEEKLY` represents one payment every two weeks.
 */
export const CraLoanPaymentSchedule = {
  Daily: "DAILY",
  Weekly: "WEEKLY",
  Biweekly: "BIWEEKLY",
  Monthly: "MONTHLY",
  Quarterly: "QUARTERLY",
  Annually: "ANNUALLY",
  Other: "OTHER",
} as const;
export type CraLoanPaymentSchedule =
  | (typeof CraLoanPaymentSchedule)[keyof typeof CraLoanPaymentSchedule]
  | (string & {});

export const craLoanPaymentScheduleSchema: EnumSchema<CraLoanPaymentSchedule> =
  s.enumOf<CraLoanPaymentSchedule>(CraLoanPaymentSchedule);
