import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProgramNameSensitivity = {
  Coarse: "coarse",
  Balanced: "balanced",
  Strict: "strict",
  Exact: "exact",
} as const;
export type ProgramNameSensitivity =
  | (typeof ProgramNameSensitivity)[keyof typeof ProgramNameSensitivity]
  | (string & {});

export const programNameSensitivitySchema: EnumSchema<ProgramNameSensitivity> =
  s.enumOf<ProgramNameSensitivity>(ProgramNameSensitivity);
