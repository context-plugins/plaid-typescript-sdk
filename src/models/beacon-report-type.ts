import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BeaconReportType = {
  FirstParty: "first_party",
  Stolen: "stolen",
  Synthetic: "synthetic",
  AccountTakeover: "account_takeover",
  DataBreach: "data_breach",
  Unknown: "unknown",
} as const;
export type BeaconReportType = (typeof BeaconReportType)[keyof typeof BeaconReportType] | (string & {});

export const beaconReportTypeSchema: EnumSchema<BeaconReportType> =
  s.enumOf<BeaconReportType>(BeaconReportType);
