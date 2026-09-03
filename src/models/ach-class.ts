import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AchClass = {
  Ccd: "ccd",
  Ppd: "ppd",
  Tel: "tel",
  Web: "web",
} as const;
export type AchClass = (typeof AchClass)[keyof typeof AchClass] | (string & {});

export const achClassSchema: EnumSchema<AchClass> = s.enumOf<AchClass>(AchClass);
