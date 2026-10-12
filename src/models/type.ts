import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of phone number. */
export const Type = {
  Home: "home",
  Work: "work",
  Office: "office",
  Mobile: "mobile",
  Mobile1: "mobile1",
  Other: "other",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
