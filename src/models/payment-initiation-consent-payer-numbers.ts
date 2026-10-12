import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationOptionalRestrictionBacsSchema,
  type PaymentInitiationOptionalRestrictionBacs,
} from "./payment-initiation-optional-restriction-bacs.js";

/** The payer's bank account numbers. Exactly one of IBAN or Bacs data is required. */
export type PaymentInitiationConsentPayerNumbers = {
  /**
   * An optional object used to restrict the accounts used for payments. If provided, the end user
   * will be able to send payments only from the specified bank account.
   */
  bacs?: PaymentInitiationOptionalRestrictionBacs | null;
  /** International Bank Account Number (IBAN). */
  iban?: string | null;
};

export const paymentInitiationConsentPayerNumbersSchema: Schema<PaymentInitiationConsentPayerNumbers> =
  s.object<PaymentInitiationConsentPayerNumbers>({
    bacs: s.optionalNullable(s.lazy(() => paymentInitiationOptionalRestrictionBacsSchema)),
    iban: s.optionalNullable(s.string()),
  });
