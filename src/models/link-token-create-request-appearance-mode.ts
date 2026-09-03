import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LinkTokenCreateRequestAppearanceMode = {
  Light: "LIGHT",
  Dark: "DARK",
  System: "SYSTEM",
} as const;
export type LinkTokenCreateRequestAppearanceMode =
  | (typeof LinkTokenCreateRequestAppearanceMode)[keyof typeof LinkTokenCreateRequestAppearanceMode]
  | (string & {});

export const linkTokenCreateRequestAppearanceModeSchema: EnumSchema<LinkTokenCreateRequestAppearanceMode> =
  s.enumOf<LinkTokenCreateRequestAppearanceMode>(LinkTokenCreateRequestAppearanceMode);
