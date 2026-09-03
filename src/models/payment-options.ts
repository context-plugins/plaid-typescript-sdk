import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationOptionalRestrictionBacsSchema,
  type PaymentInitiationOptionalRestrictionBacs,
} from "./payment-initiation-optional-restriction-bacs.js";
import { paymentSchemeSchema, type PaymentScheme } from "./payment-scheme.js";

export type PaymentOptions = {
  requestRefundDetails?: boolean | null;
  iban?: string | null;
  bacs?: PaymentInitiationOptionalRestrictionBacs | null;
  scheme?: PaymentScheme | null;
};

export const paymentOptionsSchema: Schema<PaymentOptions> = s.object<PaymentOptions>({
  requestRefundDetails: s.optionalNullable(s.boolean()),
  iban: s.optionalNullable(s.string()),
  bacs: s.optionalNullable(s.lazy(() => paymentInitiationOptionalRestrictionBacsSchema)),
  scheme: s.optionalNullable(s.lazy(() => paymentSchemeSchema)),
  _keysMap: {
    requestRefundDetails: "request_refund_details",
  },
});
