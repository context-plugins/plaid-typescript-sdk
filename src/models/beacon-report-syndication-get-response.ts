import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  beaconReportSyndicationAnalysisSchema,
  type BeaconReportSyndicationAnalysis,
} from "./beacon-report-syndication-analysis.js";
import {
  beaconReportSyndicationOriginalReportSchema,
  type BeaconReportSyndicationOriginalReport,
} from "./beacon-report-syndication-original-report.js";

export type BeaconReportSyndicationGetResponse = {
  id: string;
  beaconUserId: string;
  report: BeaconReportSyndicationOriginalReport;
  analysis: BeaconReportSyndicationAnalysis;
  requestId: string;
};

export const beaconReportSyndicationGetResponseSchema: Schema<BeaconReportSyndicationGetResponse> =
  s.object<BeaconReportSyndicationGetResponse>({
    id: s.string(),
    beaconUserId: s.string(),
    report: beaconReportSyndicationOriginalReportSchema,
    analysis: beaconReportSyndicationAnalysisSchema,
    requestId: s.string(),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      requestId: "request_id",
    },
  });
