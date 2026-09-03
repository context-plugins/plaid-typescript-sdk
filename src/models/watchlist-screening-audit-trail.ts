import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourceSchema, type Source } from "./source.js";

export type WatchlistScreeningAuditTrail = {
  source: Source;
  dashboardUserId: string | null;
  timestamp: Date;
};

export const watchlistScreeningAuditTrailSchema: Schema<WatchlistScreeningAuditTrail> =
  s.object<WatchlistScreeningAuditTrail>({
    source: sourceSchema,
    dashboardUserId: s.nullable(s.string()),
    timestamp: s.dateTime(),
    _keysMap: {
      dashboardUserId: "dashboard_user_id",
    },
  });
