import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SelfieAnalysisLivenessCheck = {
  Success: "success",
  Failed: "failed",
} as const;
export type SelfieAnalysisLivenessCheck =
  | (typeof SelfieAnalysisLivenessCheck)[keyof typeof SelfieAnalysisLivenessCheck]
  | (string & {});

export const selfieAnalysisLivenessCheckSchema: EnumSchema<SelfieAnalysisLivenessCheck> =
  s.enumOf<SelfieAnalysisLivenessCheck>(SelfieAnalysisLivenessCheck);
