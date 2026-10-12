import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferScheduleIntervalUnitSchema,
  type TransferScheduleIntervalUnit,
} from "./transfer-schedule-interval-unit.js";

/** The schedule that the recurring transfer will be executed on. */
export type TransferRecurringSchedule = {
  /** The unit of the recurring interval. */
  intervalUnit: TransferScheduleIntervalUnit;
  /**
   * The number of recurring `interval_units` between originations. The recurring interval (before
   * holiday adjustment) is calculated by multiplying `interval_unit` and `interval_count`. For
   * example, to schedule a recurring transfer which originates once every two weeks, set
   * `interval_unit` = `week` and `interval_count` = 2.
   */
  intervalCount: number;
  /**
   * The day of the interval on which to schedule the transfer.
   *
   * If the `interval_unit` is `week`, `interval_execution_day` should be an integer from 1 (Monday)
   * to 5 (Friday).
   *
   * If the `interval_unit` is `month`, `interval_execution_day` should be an integer indicating
   * which day of the month to make the transfer on. Integers from 1 to 28 can be used to make a
   * transfer on that day of the month. Negative integers from -1 to -5 can be used to make a
   * transfer relative to the end of the month. To make a transfer on the last day of the month, use
   * -1; to make the transfer on the second-to-last day, use -2, and so on.
   *
   * The transfer will be originated on the next available banking day if the designated day is a
   * non banking day.
   */
  intervalExecutionDay: number;
  /**
   * A date in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). The recurring
   * transfer will begin on the first `interval_execution_day` on or after the `start_date`.
   *
   * For `rtp` recurring transfers, `start_date` must be in the future. Otherwise, if the first
   * `interval_execution_day` on or after the start date is also the same day that
   * `/transfer/recurring/create` was called, the bank *may* make the first payment on that day, but
   * it is not guaranteed to do so.
   */
  startDate: string;
  /**
   * A date in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). The recurring
   * transfer will end on the last `interval_execution_day` on or before the `end_date`. If the
   * `interval_execution_day` between the start date and the end date (inclusive) is also the same
   * day that `/transfer/recurring/create` was called, the bank *may* make a payment on that day,
   * but it is not guaranteed to do so.
   */
  endDate?: string | null;
};

export const transferRecurringScheduleSchema: Schema<TransferRecurringSchedule> =
  s.object<TransferRecurringSchedule>({
    intervalUnit: transferScheduleIntervalUnitSchema,
    intervalCount: s.int(),
    intervalExecutionDay: s.int(),
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
