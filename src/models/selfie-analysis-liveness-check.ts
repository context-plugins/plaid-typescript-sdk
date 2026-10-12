import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Assessment of whether the selfie capture is of a real human being, as opposed to a picture of a
 * human on a screen, a picture of a paper cut out, someone wearing a mask, or a deepfake.
 */
export const SelfieAnalysisLivenessCheck = {
  Success: "success",
  Failed: "failed",
} as const;
export type SelfieAnalysisLivenessCheck =
  | (typeof SelfieAnalysisLivenessCheck)[keyof typeof SelfieAnalysisLivenessCheck]
  | (string & {});

export const selfieAnalysisLivenessCheckSchema: EnumSchema<SelfieAnalysisLivenessCheck> =
  s.enumOf<SelfieAnalysisLivenessCheck>(SelfieAnalysisLivenessCheck);
