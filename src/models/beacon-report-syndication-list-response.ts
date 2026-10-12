import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconReportSyndicationSchema, type BeaconReportSyndication } from "./beacon-report-syndication.js";

/** The response schema for `/beacon/report_syndication/list` */
export type BeaconReportSyndicationListResponse = {
  beaconReportSyndications: BeaconReportSyndication[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
