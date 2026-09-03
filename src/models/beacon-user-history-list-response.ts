import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconUserSchema, type BeaconUser } from "./beacon-user.js";

export type BeaconUserHistoryListResponse = {
  beaconUsers: BeaconUser[];
  nextCursor: string | null;
  requestId: string;
};

export const beaconUserHistoryListResponseSchema: Schema<BeaconUserHistoryListResponse> =
  s.object<BeaconUserHistoryListResponse>({
    beaconUsers: s.array(s.lazy(() => beaconUserSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      beaconUsers: "beacon_users",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
