import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconReportSyndicationSchema, type BeaconReportSyndication } from "./beacon-report-syndication.js";

export type BeaconReportSyndicationListResponse = {
  beaconReportSyndications: BeaconReportSyndication[];
  nextCursor: string | null;
  requestId: string;
};

export const beaconReportSyndicationListResponseSchema: Schema<BeaconReportSyndicationListResponse> =
  s.object<BeaconReportSyndicationListResponse>({
    beaconReportSyndications: s.array(s.lazy(() => beaconReportSyndicationSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      beaconReportSyndications: "beacon_report_syndications",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
