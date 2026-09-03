import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BeaconMatchSummaryCode = {
  Match: "match",
  PartialMatch: "partial_match",
  NoMatch: "no_match",
  NoData: "no_data",
} as const;
export type BeaconMatchSummaryCode =
  | (typeof BeaconMatchSummaryCode)[keyof typeof BeaconMatchSummaryCode]
  | (string & {});

export const beaconMatchSummaryCodeSchema: EnumSchema<BeaconMatchSummaryCode> =
  s.enumOf<BeaconMatchSummaryCode>(BeaconMatchSummaryCode);
