import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the email address domain is an educational institution domain if known. */
export const RiskCheckEmailIsEdu = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type RiskCheckEmailIsEdu =
  | (typeof RiskCheckEmailIsEdu)[keyof typeof RiskCheckEmailIsEdu]
  | (string & {});

export const riskCheckEmailIsEduSchema: EnumSchema<RiskCheckEmailIsEdu> =
  s.enumOf<RiskCheckEmailIsEdu>(RiskCheckEmailIsEdu);
