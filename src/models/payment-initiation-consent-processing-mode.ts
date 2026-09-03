import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentInitiationConsentProcessingMode = {
  Async: "ASYNC",
  Immediate: "IMMEDIATE",
} as const;
export type PaymentInitiationConsentProcessingMode =
  | (typeof PaymentInitiationConsentProcessingMode)[keyof typeof PaymentInitiationConsentProcessingMode]
  | (string & {});

export const paymentInitiationConsentProcessingModeSchema: EnumSchema<PaymentInitiationConsentProcessingMode> =
  s.enumOf<PaymentInitiationConsentProcessingMode>(PaymentInitiationConsentProcessingMode);
