import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for the status of the Item's insights */
export const MonitoringItemStatusCode = {
  Available: "AVAILABLE",
  Failed: "FAILED",
  Pending: "PENDING",
} as const;
export type MonitoringItemStatusCode =
  | (typeof MonitoringItemStatusCode)[keyof typeof MonitoringItemStatusCode]
  | (string & {});

export const monitoringItemStatusCodeSchema: EnumSchema<MonitoringItemStatusCode> =
  s.enumOf<MonitoringItemStatusCode>(MonitoringItemStatusCode);
