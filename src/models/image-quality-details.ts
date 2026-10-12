import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imageQualityOutcomeSchema, type ImageQualityOutcome } from "./image-quality-outcome.js";

/** Details about the image quality of the document. */
export type ImageQualityDetails = {
  /**
   * The outcome of the glare check.
   *
   * `success` - The image is free of glare.
   *
   * `failed` - The image contains glare that may obscure document details.
   */
  glareCheck: ImageQualityOutcome;
  /**
   * The outcome of the dimensions check.
   *
   * `success` - The image meets the minimum size and resolution requirements.
   *
   * `failed` - The image does not meet the minimum size or resolution requirements.
   */
  dimensionsCheck: ImageQualityOutcome;
  /**
   * The outcome of the blur check.
   *
   * `success` - The image is sufficiently sharp.
   *
   * `failed` - The image is too blurry for analysis.
   */
  blurCheck: ImageQualityOutcome;
};

export const imageQualityDetailsSchema: Schema<ImageQualityDetails> = s.object<ImageQualityDetails>({
  glareCheck: imageQualityOutcomeSchema,
  dimensionsCheck: imageQualityOutcomeSchema,
  blurCheck: imageQualityOutcomeSchema,
  _keysMap: {
    glareCheck: "glare_check",
    dimensionsCheck: "dimensions_check",
    blurCheck: "blur_check",
  },
});
