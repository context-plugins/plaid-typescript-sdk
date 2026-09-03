import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconReportGetRequest = {
  beaconReportId: string;
  clientId?: string;
  secret?: string;
};

export const beaconReportGetRequestSchema: Schema<BeaconReportGetRequest> = s.object<BeaconReportGetRequest>({
  beaconReportId: s.string(),
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  _keysMap: {
    beaconReportId: "beacon_report_id",
    clientId: "client_id",
  },
});
