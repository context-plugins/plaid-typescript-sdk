import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditAchClass = {
  Ccd: "ccd",
  Ppd: "ppd",
  Web: "web",
} as const;
export type CreditAchClass = (typeof CreditAchClass)[keyof typeof CreditAchClass] | (string & {});

export const creditAchClassSchema: EnumSchema<CreditAchClass> = s.enumOf<CreditAchClass>(CreditAchClass);
