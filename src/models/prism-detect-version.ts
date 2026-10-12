import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of Prism Detect */
export const PrismDetectVersion = {
  /** The `4.1` Prism Detect version. */
  _41: "4.1",
  /** The `4` Prism Detect version. */
  _4: "4",
} as const;
export type PrismDetectVersion = (typeof PrismDetectVersion)[keyof typeof PrismDetectVersion] | (string & {});

export const prismDetectVersionSchema: EnumSchema<PrismDetectVersion> =
  s.enumOf<PrismDetectVersion>(PrismDetectVersion);
