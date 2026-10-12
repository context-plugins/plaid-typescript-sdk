import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentScheduleIntervalSchema, type PaymentScheduleInterval } from "./payment-schedule-interval.js";

/**
 * Metadata specifically related to valid Payment Initiation standing order configurations for the
 * institution.
 */
export type PaymentInitiationStandingOrderMetadata = {
  /**
   * Indicates whether the institution supports closed-ended standing orders by providing an end
   * date.
   */
  supportsStandingOrderEndDate: boolean;
  /**
   * This is only applicable to `MONTHLY` standing orders. Indicates whether the institution
   * supports negative integers (-1 to -5) for setting up a `MONTHLY` standing order relative to the
   * end of the month.
   */
  supportsStandingOrderNegativeExecutionDays: boolean;
  /** A list of the valid standing order intervals supported by the institution. */
  validStandingOrderIntervals: PaymentScheduleInterval[];
};

export const paymentInitiationStandingOrderMetadataSchema: Schema<PaymentInitiationStandingOrderMetadata> =
  s.object<PaymentInitiationStandingOrderMetadata>({
    supportsStandingOrderEndDate: s.boolean(),
    supportsStandingOrderNegativeExecutionDays: s.boolean(),
    validStandingOrderIntervals: s.array(s.lazy(() => paymentScheduleIntervalSchema)),
    _keysMap: {
      supportsStandingOrderEndDate: "supports_standing_order_end_date",
      supportsStandingOrderNegativeExecutionDays: "supports_standing_order_negative_execution_days",
      validStandingOrderIntervals: "valid_standing_order_intervals",
    },
  });
