import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationOptionalRestrictionBacsSchema,
  type PaymentInitiationOptionalRestrictionBacs,
} from "./payment-initiation-optional-restriction-bacs.js";

export type PaymentInitiationConsentPayerNumbers = {
  bacs?: PaymentInitiationOptionalRestrictionBacs | null;
  iban?: string | null;
};

export const paymentInitiationConsentPayerNumbersSchema: Schema<PaymentInitiationConsentPayerNumbers> =
  s.object<PaymentInitiationConsentPayerNumbers>({
    bacs: s.optionalNullable(s.lazy(() => paymentInitiationOptionalRestrictionBacsSchema)),
    iban: s.optionalNullable(s.string()),
  });
