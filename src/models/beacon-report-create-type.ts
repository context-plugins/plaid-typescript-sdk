import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BeaconReportCreateType = {
  FirstParty: "first_party",
  Stolen: "stolen",
  Synthetic: "synthetic",
  AccountTakeover: "account_takeover",
  DataBreach: "data_breach",
  Unknown: "unknown",
} as const;
export type BeaconReportCreateType =
  | (typeof BeaconReportCreateType)[keyof typeof BeaconReportCreateType]
  | (string & {});

export const beaconReportCreateTypeSchema: EnumSchema<BeaconReportCreateType> =
  s.enumOf<BeaconReportCreateType>(BeaconReportCreateType);
