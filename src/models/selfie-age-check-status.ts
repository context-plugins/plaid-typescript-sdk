import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SelfieAgeCheckStatus = {
  Match: "match",
  Warning: "warning",
  NoMatch: "no_match",
  NoData: "no_data",
} as const;
export type SelfieAgeCheckStatus =
  | (typeof SelfieAgeCheckStatus)[keyof typeof SelfieAgeCheckStatus]
  | (string & {});

export const selfieAgeCheckStatusSchema: EnumSchema<SelfieAgeCheckStatus> =
  s.enumOf<SelfieAgeCheckStatus>(SelfieAgeCheckStatus);
