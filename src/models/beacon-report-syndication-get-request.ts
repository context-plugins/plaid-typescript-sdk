import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconReportSyndicationGetRequest = {
  beaconReportSyndicationId: string;
  clientId?: string;
  secret?: string;
};

export const beaconReportSyndicationGetRequestSchema: Schema<BeaconReportSyndicationGetRequest> =
  s.object<BeaconReportSyndicationGetRequest>({
    beaconReportSyndicationId: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      beaconReportSyndicationId: "beacon_report_syndication_id",
      clientId: "client_id",
    },
  });
