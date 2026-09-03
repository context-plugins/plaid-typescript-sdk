import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferScheduleIntervalUnitSchema,
  type TransferScheduleIntervalUnit,
} from "./transfer-schedule-interval-unit.js";

export type TransferRecurringSchedule = {
  intervalUnit: TransferScheduleIntervalUnit;
  intervalCount: number;
  intervalExecutionDay: number;
  startDate: string;
  endDate?: string | null;
};

export const transferRecurringScheduleSchema: Schema<TransferRecurringSchedule> =
  s.object<TransferRecurringSchedule>({
    intervalUnit: transferScheduleIntervalUnitSchema,
    intervalCount: s.number(),
    intervalExecutionDay: s.number(),
    startDate: s.dateOnly(),
    endDate: s.optionalNullable(s.dateOnly()),
    _keysMap: {
      intervalUnit: "interval_unit",
      intervalCount: "interval_count",
      intervalExecutionDay: "interval_execution_day",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
