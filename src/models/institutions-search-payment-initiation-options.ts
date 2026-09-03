import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InstitutionsSearchPaymentInitiationOptions = {
  paymentId?: string | null;
  consentId?: string | null;
};

export const institutionsSearchPaymentInitiationOptionsSchema: Schema<InstitutionsSearchPaymentInitiationOptions> =
  s.object<InstitutionsSearchPaymentInitiationOptions>({
    paymentId: s.optionalNullable(s.string()),
    consentId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      consentId: "consent_id",
    },
  });
