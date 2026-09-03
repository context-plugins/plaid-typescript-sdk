import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferScheduleIntervalUnit = {
  Week: "week",
  Month: "month",
} as const;
export type TransferScheduleIntervalUnit =
  | (typeof TransferScheduleIntervalUnit)[keyof typeof TransferScheduleIntervalUnit]
  | (string & {});

export const transferScheduleIntervalUnitSchema: EnumSchema<TransferScheduleIntervalUnit> =
  s.enumOf<TransferScheduleIntervalUnit>(TransferScheduleIntervalUnit);
