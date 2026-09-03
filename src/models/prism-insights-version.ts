import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PrismInsightsVersion = {
  _41: "4.1",
  _4: "4",
  _3: "3",
} as const;
export type PrismInsightsVersion =
  | (typeof PrismInsightsVersion)[keyof typeof PrismInsightsVersion]
  | (string & {});

export const prismInsightsVersionSchema: EnumSchema<PrismInsightsVersion> =
  s.enumOf<PrismInsightsVersion>(PrismInsightsVersion);
