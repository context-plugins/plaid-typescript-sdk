import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconUserGetRequest = {
  beaconUserId: string;
  clientId?: string;
  secret?: string;
};

export const beaconUserGetRequestSchema: Schema<BeaconUserGetRequest> = s.object<BeaconUserGetRequest>({
  beaconUserId: s.string(),
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  _keysMap: {
    beaconUserId: "beacon_user_id",
    clientId: "client_id",
  },
});
