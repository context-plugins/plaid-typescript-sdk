import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request input for fetching the risk insights for a Beacon User's Bank Accounts */
export type BeaconUserAccountInsightsGetRequest = {
  /** ID of the associated Beacon User. */
  beaconUserId: string;
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
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

export const beaconUserAccountInsightsGetRequestSchema: Schema<BeaconUserAccountInsightsGetRequest> =
  s.object<BeaconUserAccountInsightsGetRequest>({
    beaconUserId: s.string(),
    accessToken: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      accessToken: "access_token",
      clientId: "client_id",
    },
  });
