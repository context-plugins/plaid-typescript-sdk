import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Strategy = {
  Reset: "reset",
  Incomplete: "incomplete",
  Infer: "infer",
  Custom: "custom",
} as const;
export type Strategy = (typeof Strategy)[keyof typeof Strategy] | (string & {});

export const strategySchema: EnumSchema<Strategy> = s.enumOf<Strategy>(Strategy);
