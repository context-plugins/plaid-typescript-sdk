import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconUserAccountInsightsGetRequest = {
  beaconUserId: string;
  accessToken: string;
  clientId?: string;
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
