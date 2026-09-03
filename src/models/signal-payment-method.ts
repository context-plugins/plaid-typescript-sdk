import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SignalPaymentMethod = {
  SameDayAch: "SAME_DAY_ACH",
  NextDayAch: "NEXT_DAY_ACH",
  StandardAch: "STANDARD_ACH",
  MultiplePaymentMethods: "MULTIPLE_PAYMENT_METHODS",
} as const;
export type SignalPaymentMethod =
  | (typeof SignalPaymentMethod)[keyof typeof SignalPaymentMethod]
  | (string & {});

export const signalPaymentMethodSchema: EnumSchema<SignalPaymentMethod> =
  s.enumOf<SignalPaymentMethod>(SignalPaymentMethod);
