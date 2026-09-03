import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ImageQuality = {
  High: "high",
  Medium: "medium",
  Low: "low",
} as const;
export type ImageQuality = (typeof ImageQuality)[keyof typeof ImageQuality] | (string & {});

export const imageQualitySchema: EnumSchema<ImageQuality> = s.enumOf<ImageQuality>(ImageQuality);
