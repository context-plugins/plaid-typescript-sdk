import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RefreshInterval = {
  Normal: "NORMAL",
  Delayed: "DELAYED",
  Stopped: "STOPPED",
} as const;
export type RefreshInterval = (typeof RefreshInterval)[keyof typeof RefreshInterval] | (string & {});

export const refreshIntervalSchema: EnumSchema<RefreshInterval> = s.enumOf<RefreshInterval>(RefreshInterval);
