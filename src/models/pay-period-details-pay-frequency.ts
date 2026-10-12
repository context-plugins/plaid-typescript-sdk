import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The frequency at which an individual is paid. */
export const PayPeriodDetailsPayFrequency = {
  PayFrequencyUnknown: "PAY_FREQUENCY_UNKNOWN",
  PayFrequencyWeekly: "PAY_FREQUENCY_WEEKLY",
  PayFrequencyBiweekly: "PAY_FREQUENCY_BIWEEKLY",
  PayFrequencySemimonthly: "PAY_FREQUENCY_SEMIMONTHLY",
  PayFrequencyMonthly: "PAY_FREQUENCY_MONTHLY",
} as const;
export type PayPeriodDetailsPayFrequency =
  | (typeof PayPeriodDetailsPayFrequency)[keyof typeof PayPeriodDetailsPayFrequency]
  | (string & {});

export const payPeriodDetailsPayFrequencySchema: EnumSchema<PayPeriodDetailsPayFrequency> =
  s.enumOf<PayPeriodDetailsPayFrequency>(PayPeriodDetailsPayFrequency);
