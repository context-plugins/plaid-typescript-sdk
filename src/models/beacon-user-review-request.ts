import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconUserStatusSchema, type BeaconUserStatus } from "./beacon-user-status.js";

export type BeaconUserReviewRequest = {
  beaconUserId: string;
  status: BeaconUserStatus;
  clientId?: string;
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
