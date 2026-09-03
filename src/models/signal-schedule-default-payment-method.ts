import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SignalScheduleDefaultPaymentMethod = {
  SameDayAch: "SAME_DAY_ACH",
  StandardAch: "STANDARD_ACH",
  MultiplePaymentMethods: "MULTIPLE_PAYMENT_METHODS",
} as const;
export type SignalScheduleDefaultPaymentMethod =
  | (typeof SignalScheduleDefaultPaymentMethod)[keyof typeof SignalScheduleDefaultPaymentMethod]
  | (string & {});

export const signalScheduleDefaultPaymentMethodSchema: EnumSchema<SignalScheduleDefaultPaymentMethod> =
  s.enumOf<SignalScheduleDefaultPaymentMethod>(SignalScheduleDefaultPaymentMethod);
