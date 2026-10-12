import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Life span for the payment consent. After the `to` date the payment consent expires and can no
 * longer be used for payment initiation.
 */
export type PaymentConsentValidDateTime = {
  /**
   * The date and time from which the consent should be active, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  from?: Date | null;
  /**
   * The date and time at which the consent expires, in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format.
   */
  to?: Date | null;
};

export const paymentConsentValidDateTimeSchema: Schema<PaymentConsentValidDateTime> =
  s.object<PaymentConsentValidDateTime>({
    from: s.optionalNullable(s.dateTime()),
    to: s.optionalNullable(s.dateTime()),
  });
