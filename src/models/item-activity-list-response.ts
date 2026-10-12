import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activitySchema, type Activity } from "./activity.js";
import { lastDataAccessTimesSchema, type LastDataAccessTimes } from "./last-data-access-times.js";

/** Describes a historical log of user consent events. */
export type ItemActivityListResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** A list of activities. */
  activities: Activity[];
  /**
   * An array of objects containing timestamps for the last time each data type was accessed per
   * application.
   */
  lastDataAccessTimes: LastDataAccessTimes[];
  /** Cursor used for pagination. */
  cursor?: string;
};

export const itemActivityListResponseSchema: Schema<ItemActivityListResponse> =
  s.object<ItemActivityListResponse>({
    requestId: s.string(),
    activities: s.array(s.lazy(() => activitySchema)),
    lastDataAccessTimes: s.array(s.lazy(() => lastDataAccessTimesSchema)),
    cursor: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
      lastDataAccessTimes: "last_data_access_times",
    },
  });
