import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningAuditTrailSchema,
  type WatchlistScreeningAuditTrail,
} from "./watchlist-screening-audit-trail.js";
import {
  watchlistScreeningSearchTermsSchema,
  type WatchlistScreeningSearchTerms,
} from "./watchlist-screening-search-terms.js";
import {
  watchlistScreeningStatusSchema,
  type WatchlistScreeningStatus,
} from "./watchlist-screening-status.js";

export type WatchlistScreeningIndividual = {
  id: string;
  searchTerms: WatchlistScreeningSearchTerms;
  assignee: string | null;
  status: WatchlistScreeningStatus;
  clientUserId: string | null;
  auditTrail: WatchlistScreeningAuditTrail;
};

export const watchlistScreeningIndividualSchema: Schema<WatchlistScreeningIndividual> =
  s.object<WatchlistScreeningIndividual>({
    id: s.string(),
    searchTerms: watchlistScreeningSearchTermsSchema,
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
