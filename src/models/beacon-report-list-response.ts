import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconReportSchema, type BeaconReport } from "./beacon-report.js";

export type BeaconReportListResponse = {
  beaconReports: BeaconReport[];
  nextCursor: string | null;
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
