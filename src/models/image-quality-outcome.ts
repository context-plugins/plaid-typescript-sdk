import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The outcome of the image quality check.
 *
 *
 * `success` - The check passed.
 *
 * `failed` - The check did not pass.
 */
export const ImageQualityOutcome = {
  Success: "success",
  Failed: "failed",
} as const;
export type ImageQualityOutcome =
  | (typeof ImageQualityOutcome)[keyof typeof ImageQualityOutcome]
  | (string & {});

export const imageQualityOutcomeSchema: EnumSchema<ImageQualityOutcome> =
  s.enumOf<ImageQualityOutcome>(ImageQualityOutcome);
