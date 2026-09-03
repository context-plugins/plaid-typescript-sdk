import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EarningsBreakdownCanonicalDescription = {
  Bonus: "BONUS",
  Commission: "COMMISSION",
  Overtime: "OVERTIME",
  PaidTimeOff: "PAID TIME OFF",
  RegularPay: "REGULAR PAY",
  Vacation: "VACATION",
  BasicAllowanceHousing: "BASIC ALLOWANCE HOUSING",
  BasicAllowanceSubsistence: "BASIC ALLOWANCE SUBSISTENCE",
  Other: "OTHER",
} as const;
export type EarningsBreakdownCanonicalDescription =
  | (typeof EarningsBreakdownCanonicalDescription)[keyof typeof EarningsBreakdownCanonicalDescription]
  | (string & {});

export const earningsBreakdownCanonicalDescriptionSchema: EnumSchema<EarningsBreakdownCanonicalDescription> =
  s.enumOf<EarningsBreakdownCanonicalDescription>(EarningsBreakdownCanonicalDescription);
