import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningAuditTrailSchema,
  type WatchlistScreeningAuditTrail,
} from "./watchlist-screening-audit-trail.js";

export type WatchlistScreeningEntityReviewCreateResponse = {
  id: string;
  confirmedHits: string[];
  dismissedHits: string[];
  comment: string | null;
  auditTrail: WatchlistScreeningAuditTrail;
  requestId: string;
};

export const watchlistScreeningEntityReviewCreateResponseSchema: Schema<WatchlistScreeningEntityReviewCreateResponse> =
  s.object<WatchlistScreeningEntityReviewCreateResponse>({
    id: s.string(),
    confirmedHits: s.array(s.string()),
    dismissedHits: s.array(s.string()),
    comment: s.nullable(s.string()),
    auditTrail: watchlistScreeningAuditTrailSchema,
    requestId: s.string(),
    _keysMap: {
      confirmedHits: "confirmed_hits",
      dismissedHits: "dismissed_hits",
      auditTrail: "audit_trail",
      requestId: "request_id",
    },
  });
