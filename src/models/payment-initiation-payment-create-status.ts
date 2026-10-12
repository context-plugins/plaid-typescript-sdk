import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * For a payment returned by this endpoint, there is only one possible value:
 *
 * `PAYMENT_STATUS_INPUT_NEEDED`: The initial phase of the payment
 */
export const PaymentInitiationPaymentCreateStatus = {
  PaymentStatusInputNeeded: "PAYMENT_STATUS_INPUT_NEEDED",
} as const;
export type PaymentInitiationPaymentCreateStatus =
  | (typeof PaymentInitiationPaymentCreateStatus)[keyof typeof PaymentInitiationPaymentCreateStatus]
  | (string & {});

export const paymentInitiationPaymentCreateStatusSchema: EnumSchema<PaymentInitiationPaymentCreateStatus> =
  s.enumOf<PaymentInitiationPaymentCreateStatus>(PaymentInitiationPaymentCreateStatus);
