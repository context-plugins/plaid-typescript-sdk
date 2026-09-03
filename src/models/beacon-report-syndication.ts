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

export type BeaconReportSyndication = {
  id: string;
  beaconUserId: string;
  report: BeaconReportSyndicationOriginalReport;
  analysis: BeaconReportSyndicationAnalysis;
};

export const beaconReportSyndicationSchema: Schema<BeaconReportSyndication> =
  s.object<BeaconReportSyndication>({
    id: s.string(),
    beaconUserId: s.string(),
    report: beaconReportSyndicationOriginalReportSchema,
    analysis: beaconReportSyndicationAnalysisSchema,
    _keysMap: {
      beaconUserId: "beacon_user_id",
    },
  });
