import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of Prism FirstDetect. If not specified, will default to v3. */
export const PrismFirstDetectVersion = {
  /** The `3` Prism FirstDetect version. */
  _3: "3",
} as const;
export type PrismFirstDetectVersion =
  | (typeof PrismFirstDetectVersion)[keyof typeof PrismFirstDetectVersion]
  | (string & {});

export const prismFirstDetectVersionSchema: EnumSchema<PrismFirstDetectVersion> =
  s.enumOf<PrismFirstDetectVersion>(PrismFirstDetectVersion);
