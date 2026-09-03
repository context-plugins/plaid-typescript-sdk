import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentInitiationConsentScope = {
  MeToMe: "ME_TO_ME",
  External: "EXTERNAL",
} as const;
export type PaymentInitiationConsentScope =
  | (typeof PaymentInitiationConsentScope)[keyof typeof PaymentInitiationConsentScope]
  | (string & {});

export const paymentInitiationConsentScopeSchema: EnumSchema<PaymentInitiationConsentScope> =
  s.enumOf<PaymentInitiationConsentScope>(PaymentInitiationConsentScope);
