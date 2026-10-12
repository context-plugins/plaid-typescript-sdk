import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A high level description of the quality of the image the user submitted.
 *
 * For example, an image that is blurry, distorted by glare from a nearby light source, or
 * improperly framed might be marked as low or medium quality. Poor quality images are more likely
 * to fail OCR and/or template conformity checks.
 *
 * Note: By default, Plaid will let a user recapture document images twice before failing the entire
 * session if we attribute the failure to low image quality.
 */
export const ImageQuality = {
  High: "high",
  Medium: "medium",
  Low: "low",
} as const;
export type ImageQuality = (typeof ImageQuality)[keyof typeof ImageQuality] | (string & {});

export const imageQualitySchema: EnumSchema<ImageQuality> = s.enumOf<ImageQuality>(ImageQuality);
