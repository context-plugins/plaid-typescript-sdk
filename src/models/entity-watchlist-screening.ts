import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityWatchlistScreeningSearchTermsSchema,
  type EntityWatchlistScreeningSearchTerms,
} from "./entity-watchlist-screening-search-terms.js";
import {
  watchlistScreeningAuditTrailSchema,
  type WatchlistScreeningAuditTrail,
} from "./watchlist-screening-audit-trail.js";
import {
  watchlistScreeningStatusSchema,
  type WatchlistScreeningStatus,
} from "./watchlist-screening-status.js";

export type EntityWatchlistScreening = {
  id: string;
  searchTerms: EntityWatchlistScreeningSearchTerms;
  assignee: string | null;
  status: WatchlistScreeningStatus;
  clientUserId: string | null;
  auditTrail: WatchlistScreeningAuditTrail;
};

export const entityWatchlistScreeningSchema: Schema<EntityWatchlistScreening> =
  s.object<EntityWatchlistScreening>({
    id: s.string(),
    searchTerms: entityWatchlistScreeningSearchTermsSchema,
    assignee: s.nullable(s.string()),
    status: watchlistScreeningStatusSchema,
    clientUserId: s.nullable(s.string()),
    auditTrail: watchlistScreeningAuditTrailSchema,
    _keysMap: {
      searchTerms: "search_terms",
      clientUserId: "client_user_id",
      auditTrail: "audit_trail",
    },
  });
