import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { latestScoredEventSchema, type LatestScoredEvent } from "./latest-scored-event.js";
import { protectReportSchema, type ProtectReport } from "./protect-report.js";

export type ProtectUserInsightsGetResponse = {
  userId: string;
  latestScoredEvent: LatestScoredEvent | null;
  reports?: ProtectReport[];
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
