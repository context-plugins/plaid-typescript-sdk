import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PersonalFinanceCategoryVersion = {
  V1: "v1",
  V2: "v2",
} as const;
export type PersonalFinanceCategoryVersion =
  | (typeof PersonalFinanceCategoryVersion)[keyof typeof PersonalFinanceCategoryVersion]
  | (string & {});

export const personalFinanceCategoryVersionSchema: EnumSchema<PersonalFinanceCategoryVersion> =
  s.enumOf<PersonalFinanceCategoryVersion>(PersonalFinanceCategoryVersion);
