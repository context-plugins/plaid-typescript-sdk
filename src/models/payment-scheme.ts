import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentScheme = {
  LocalDefault: "LOCAL_DEFAULT",
  LocalInstant: "LOCAL_INSTANT",
  SepaCreditTransfer: "SEPA_CREDIT_TRANSFER",
  SepaCreditTransferInstant: "SEPA_CREDIT_TRANSFER_INSTANT",
} as const;
export type PaymentScheme = (typeof PaymentScheme)[keyof typeof PaymentScheme] | (string & {});

export const paymentSchemeSchema: EnumSchema<PaymentScheme> = s.enumOf<PaymentScheme>(PaymentScheme);
