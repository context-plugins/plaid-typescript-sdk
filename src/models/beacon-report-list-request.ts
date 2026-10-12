import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request input for listing Beacon Reports */
export type BeaconReportListRequest = {
  /** ID of the associated Beacon User. */
  beaconUserId: string;
  /** An identifier that determines which page of results you receive. */
  cursor?: string | null;
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

export const beaconReportListRequestSchema: Schema<BeaconReportListRequest> =
  s.object<BeaconReportListRequest>({
    beaconUserId: s.string(),
    cursor: s.optionalNullable(s.string()),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      clientId: "client_id",
    },
  });
