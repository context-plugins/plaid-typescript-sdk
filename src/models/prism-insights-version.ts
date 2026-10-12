import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of Prism Insights. If not specified, will default to v3. */
export const PrismInsightsVersion = {
  /** The `4.1` Prism Insights version. */
  _41: "4.1",
  /** The `4` Prism Insights version. */
  _4: "4",
  /** The `3` Prism Insights version. */
  _3: "3",
} as const;
export type PrismInsightsVersion =
  | (typeof PrismInsightsVersion)[keyof typeof PrismInsightsVersion]
  | (string & {});

export const prismInsightsVersionSchema: EnumSchema<PrismInsightsVersion> =
  s.enumOf<PrismInsightsVersion>(PrismInsightsVersion);
