import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PrismDetectVersion = {
  _41: "4.1",
  _4: "4",
} as const;
export type PrismDetectVersion = (typeof PrismDetectVersion)[keyof typeof PrismDetectVersion] | (string & {});

export const prismDetectVersionSchema: EnumSchema<PrismDetectVersion> =
  s.enumOf<PrismDetectVersion>(PrismDetectVersion);
