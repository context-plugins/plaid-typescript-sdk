import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FlowType = {
  FlexibleAuth: "FLEXIBLE_AUTH",
} as const;
export type FlowType = (typeof FlowType)[keyof typeof FlowType] | (string & {});

export const flowTypeSchema: EnumSchema<FlowType> = s.enumOf<FlowType>(FlowType);
