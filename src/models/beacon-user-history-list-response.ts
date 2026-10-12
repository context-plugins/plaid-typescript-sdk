import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconUserSchema, type BeaconUser } from "./beacon-user.js";

/** The response schema for `/beacon/user/history/list` */
export type BeaconUserHistoryListResponse = {
  beaconUsers: BeaconUser[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
