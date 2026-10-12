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

/**
 * A Beacon Report Syndication represents a Beacon Report created either by your organization or
 * another Beacon customer that matches a specific Beacon User you've created.
 *
 * The `analysis` field in the response indicates which fields matched between the originally
 * reported Beacon User and the Beacon User that the report was syndicated to.
 *
 * The `report` field in the response contains a subset of information from the original report.
 */
export type BeaconReportSyndication = {
  /** ID of the associated Beacon Report Syndication. */
  id: string;
  /** ID of the associated Beacon User. */
  beaconUserId: string;
  /**
   * A subset of information from a Beacon Report that has been syndicated to a matching Beacon User
   * in your program.
   *
   * The `id` field in the response is the ID of the original report that was syndicated. If the
   * original report was created by your organization, the field will be filled with the ID of the
   * report. Otherwise, the field will be `null` indicating that the original report was created by
   * another Beacon customer.
   */
  report: BeaconReportSyndicationOriginalReport;
  /**
   * Analysis of which fields matched between the originally reported Beacon User and the Beacon
   * User that the report was syndicated to.
   */
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
