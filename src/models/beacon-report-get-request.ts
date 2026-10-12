import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request input for getting a Beacon Report */
export type BeaconReportGetRequest = {
  /** ID of the associated Beacon Report. */
  beaconReportId: string;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
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
