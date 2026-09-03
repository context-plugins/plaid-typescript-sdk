import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentScheduleIntervalSchema, type PaymentScheduleInterval } from "./payment-schedule-interval.js";

export type PaymentInitiationStandingOrderMetadata = {
  supportsStandingOrderEndDate: boolean;
  supportsStandingOrderNegativeExecutionDays: boolean;
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
