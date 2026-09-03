import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationOptionalRestrictionBacsSchema,
  type PaymentInitiationOptionalRestrictionBacs,
} from "./payment-initiation-optional-restriction-bacs.js";

export type ExternalPaymentInitiationConsentOptions = {
  requestRefundDetails?: boolean | null;
  iban?: string | null;
  bacs?: PaymentInitiationOptionalRestrictionBacs | null;
};

export const externalPaymentInitiationConsentOptionsSchema: Schema<ExternalPaymentInitiationConsentOptions> =
  s.object<ExternalPaymentInitiationConsentOptions>({
    requestRefundDetails: s.optionalNullable(s.boolean()),
    iban: s.optionalNullable(s.string()),
    bacs: s.optionalNullable(s.lazy(() => paymentInitiationOptionalRestrictionBacsSchema)),
    _keysMap: {
      requestRefundDetails: "request_refund_details",
    },
  });
