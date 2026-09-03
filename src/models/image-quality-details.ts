import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { imageQualityOutcomeSchema, type ImageQualityOutcome } from "./image-quality-outcome.js";

export type ImageQualityDetails = {
  glareCheck: ImageQualityOutcome;
  dimensionsCheck: ImageQualityOutcome;
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
