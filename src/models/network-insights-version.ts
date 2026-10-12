import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of Network Insights. Required if using Network Insights. */
export const NetworkInsightsVersion = {
  Ni1: "NI1",
} as const;
export type NetworkInsightsVersion =
  | (typeof NetworkInsightsVersion)[keyof typeof NetworkInsightsVersion]
  | (string & {});

export const networkInsightsVersionSchema: EnumSchema<NetworkInsightsVersion> =
  s.enumOf<NetworkInsightsVersion>(NetworkInsightsVersion);
