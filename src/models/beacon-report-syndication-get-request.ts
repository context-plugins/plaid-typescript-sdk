import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request input for getting a Beacon Report Syndication */
export type BeaconReportSyndicationGetRequest = {
  /** ID of the associated Beacon Report Syndication. */
  beaconReportSyndicationId: string;
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
