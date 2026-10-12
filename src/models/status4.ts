import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field is deprecated in favor of the `breakdown` object, which provides more granular
 * institution health data.
 *
 * `HEALTHY`: the majority of requests are successful `DEGRADED`: only some requests are successful
 * `DOWN`: all requests are failing
 */
export const Status4 = {
  Healthy: "HEALTHY",
  Degraded: "DEGRADED",
  Down: "DOWN",
} as const;
export type Status4 = (typeof Status4)[keyof typeof Status4] | (string & {});

export const status4Schema: EnumSchema<Status4> = s.enumOf<Status4>(Status4);
