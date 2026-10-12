import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconReportSchema, type BeaconReport } from "./beacon-report.js";

/** The response schema for `/beacon/report/list` */
export type BeaconReportListResponse = {
  beaconReports: BeaconReport[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const beaconReportListResponseSchema: Schema<BeaconReportListResponse> =
  s.object<BeaconReportListResponse>({
    beaconReports: s.array(s.lazy(() => beaconReportSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      beaconReports: "beacon_reports",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
