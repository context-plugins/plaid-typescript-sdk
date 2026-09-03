import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PoBoxStatus = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type PoBoxStatus = (typeof PoBoxStatus)[keyof typeof PoBoxStatus] | (string & {});

export const poBoxStatusSchema: EnumSchema<PoBoxStatus> = s.enumOf<PoBoxStatus>(PoBoxStatus);
