import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentScheduleIntervalSchema, type PaymentScheduleInterval } from "./payment-schedule-interval.js";

export type ExternalPaymentScheduleGet = {
  interval: PaymentScheduleInterval;
  intervalExecutionDay: number;
  startDate: string;
  endDate: string | null;
  adjustedStartDate: string | null;
};

export const externalPaymentScheduleGetSchema: Schema<ExternalPaymentScheduleGet> =
  s.object<ExternalPaymentScheduleGet>({
    interval: paymentScheduleIntervalSchema,
    intervalExecutionDay: s.number(),
    startDate: s.dateOnly(),
    endDate: s.nullable(s.dateOnly()),
    adjustedStartDate: s.nullable(s.dateOnly()),
    _keysMap: {
      intervalExecutionDay: "interval_execution_day",
      startDate: "start_date",
      endDate: "end_date",
      adjustedStartDate: "adjusted_start_date",
    },
  });
