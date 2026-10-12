import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How frequently data for subscription products like Investments, Transactions, and Liabilities, is
 * being refreshed, relative to the institution's normal scheduling. The `refresh_interval` may be
 * `DELAYED` or `STOPPED` even when the success rate is high.
 */
export const RefreshInterval = {
  Normal: "NORMAL",
  Delayed: "DELAYED",
  Stopped: "STOPPED",
} as const;
export type RefreshInterval = (typeof RefreshInterval)[keyof typeof RefreshInterval] | (string & {});

export const refreshIntervalSchema: EnumSchema<RefreshInterval> = s.enumOf<RefreshInterval>(RefreshInterval);
