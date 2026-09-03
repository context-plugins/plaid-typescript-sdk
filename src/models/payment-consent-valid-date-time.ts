import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentConsentValidDateTime = {
  from?: Date | null;
  to?: Date | null;
};

export const paymentConsentValidDateTimeSchema: Schema<PaymentConsentValidDateTime> =
  s.object<PaymentConsentValidDateTime>({
    from: s.optionalNullable(s.dateTime()),
    to: s.optionalNullable(s.dateTime()),
  });
