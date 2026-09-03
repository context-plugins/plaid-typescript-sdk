import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activitySchema, type Activity } from "./activity.js";
import { lastDataAccessTimesSchema, type LastDataAccessTimes } from "./last-data-access-times.js";

export type ItemActivityListResponse = {
  requestId: string;
  activities: Activity[];
  lastDataAccessTimes: LastDataAccessTimes[];
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
