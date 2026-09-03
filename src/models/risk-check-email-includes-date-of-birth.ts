import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskCheckEmailIncludesDateOfBirth = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type RiskCheckEmailIncludesDateOfBirth =
  | (typeof RiskCheckEmailIncludesDateOfBirth)[keyof typeof RiskCheckEmailIncludesDateOfBirth]
  | (string & {});

export const riskCheckEmailIncludesDateOfBirthSchema: EnumSchema<RiskCheckEmailIncludesDateOfBirth> =
  s.enumOf<RiskCheckEmailIncludesDateOfBirth>(RiskCheckEmailIncludesDateOfBirth);
