import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PrismFirstDetectVersion = {
  _3: "3",
} as const;
export type PrismFirstDetectVersion =
  | (typeof PrismFirstDetectVersion)[keyof typeof PrismFirstDetectVersion]
  | (string & {});

export const prismFirstDetectVersionSchema: EnumSchema<PrismFirstDetectVersion> =
  s.enumOf<PrismFirstDetectVersion>(PrismFirstDetectVersion);
