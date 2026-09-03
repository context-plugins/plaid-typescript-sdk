import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconUserHistoryListRequest = {
  beaconUserId: string;
  cursor?: string | null;
  clientId?: string;
  secret?: string;
};

export const beaconUserHistoryListRequestSchema: Schema<BeaconUserHistoryListRequest> =
  s.object<BeaconUserHistoryListRequest>({
    beaconUserId: s.string(),
    cursor: s.optionalNullable(s.string()),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      clientId: "client_id",
    },
  });
