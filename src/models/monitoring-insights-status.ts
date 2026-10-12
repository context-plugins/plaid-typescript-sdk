import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for the status of the insights */
export const MonitoringInsightsStatus = {
  Available: "AVAILABLE",
  Failed: "FAILED",
} as const;
export type MonitoringInsightsStatus =
  | (typeof MonitoringInsightsStatus)[keyof typeof MonitoringInsightsStatus]
  | (string & {});

export const monitoringInsightsStatusSchema: EnumSchema<MonitoringInsightsStatus> =
  s.enumOf<MonitoringInsightsStatus>(MonitoringInsightsStatus);
