import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconUserStatusSchema, type BeaconUserStatus } from "./beacon-user-status.js";

/** Request input for updating the status of a Beacon User */
export type BeaconUserReviewRequest = {
  /** ID of the associated Beacon User. */
  beaconUserId: string;
  /**
   * A status of a Beacon User.
   *
   * `rejected`: The Beacon User has been rejected for fraud. Users can be automatically or manually
   * rejected.
   *
   * `pending_review`: The Beacon User has been marked for review.
   *
   * `cleared`: The Beacon User has been cleared of fraud.
   */
  status: BeaconUserStatus;
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

export const beaconUserReviewRequestSchema: Schema<BeaconUserReviewRequest> =
  s.object<BeaconUserReviewRequest>({
    beaconUserId: s.string(),
    status: beaconUserStatusSchema,
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      clientId: "client_id",
    },
  });
