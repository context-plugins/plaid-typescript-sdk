import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selfieAnalysisSchema, type SelfieAnalysis } from "./selfie-analysis.js";
import { selfieCaptureSchema, type SelfieCapture } from "./selfie-capture.js";
import { selfieStatusSchema, type SelfieStatus } from "./selfie-status.js";

/** Captures and analysis from a user's selfie. */
export type SelfieCheckSelfie = {
  /**
   * An outcome status for this specific selfie. Distinct from the overall `selfie_check.status`
   * that summarizes the verification outcome from one or more selfies.
   */
  status: SelfieStatus;
  /** The `attempt` field begins with 1 and increments with each subsequent selfie upload. */
  attempt: number;
  /**
   * The image or video capture of a selfie. Only one of `image_url` or `video_url` will be
   * populated per selfie. In the vast majority of sessions Plaid records a short video of the user,
   * so `video_url` is populated and `image_url` is `null`. `image_url` is only populated in the
   * rare passive-liveness fallback case, where the user's device could not complete the standard
   * video liveness capture (for example, a camera or streaming error) and submitted a single still
   * image instead.
   */
  capture: SelfieCapture;
  /**
   * High level descriptions of how the associated selfie was processed. If a selfie fails
   * verification, the details in the `analysis` object should help clarify why the selfie was
   * rejected.
   */
  analysis: SelfieAnalysis;
};

export const selfieCheckSelfieSchema: Schema<SelfieCheckSelfie> = s.object<SelfieCheckSelfie>({
  status: selfieStatusSchema,
  attempt: s.int(),
  capture: selfieCaptureSchema,
  analysis: selfieAnalysisSchema,
});
