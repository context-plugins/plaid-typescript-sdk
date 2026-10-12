import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const BeaconUserStatus = {
  Rejected: "rejected",
  PendingReview: "pending_review",
  Cleared: "cleared",
} as const;
export type BeaconUserStatus = (typeof BeaconUserStatus)[keyof typeof BeaconUserStatus] | (string & {});

export const beaconUserStatusSchema: EnumSchema<BeaconUserStatus> =
  s.enumOf<BeaconUserStatus>(BeaconUserStatus);
