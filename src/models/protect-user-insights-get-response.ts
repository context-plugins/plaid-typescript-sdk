import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { latestScoredEventSchema, type LatestScoredEvent } from "./latest-scored-event.js";
import { protectReportSchema, type ProtectReport } from "./protect-report.js";

/** Response object for /protect/user/insights/get */
export type ProtectUserInsightsGetResponse = {
  /**
   * The Plaid User ID. If a `client_user_id` was provided in the request instead of a `user_id`, a
   * new `user_id` will be generated if one doesn't already exist for that `client_user_id`.
   */
  userId: string;
  /** The latest scored event for a user. */
  latestScoredEvent: LatestScoredEvent | null;
  /**
   * List of Protect reports associated with this user, limited to the most recent 100 reports in
   * reverse chronological order (newest first).
   */
  reports?: ProtectReport[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const protectUserInsightsGetResponseSchema: Schema<ProtectUserInsightsGetResponse> =
  s.object<ProtectUserInsightsGetResponse>({
    userId: s.string(),
    latestScoredEvent: s.nullable(s.lazy(() => latestScoredEventSchema)),
    reports: s.optional(s.array(s.lazy(() => protectReportSchema))),
    requestId: s.string(),
    _keysMap: {
      userId: "user_id",
      latestScoredEvent: "latest_scored_event",
      requestId: "request_id",
    },
  });
