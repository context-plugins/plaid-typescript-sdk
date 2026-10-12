import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningAuditTrailSchema,
  type WatchlistScreeningAuditTrail,
} from "./watchlist-screening-audit-trail.js";

/**
 * A review submitted by a team member for an individual watchlist screening. A review can be either
 * a comment on the current screening state, actions taken against hits attached to the watchlist
 * screening, or both.
 */
export type WatchlistScreeningIndividualReviewCreateResponse = {
  /** ID of the associated review. */
  id: string;
  /**
   * Hits marked as a true positive after thorough manual review. These hits will never recur or be
   * updated once confirmed. In most cases, confirmed hits indicate that the customer should be
   * rejected.
   */
  confirmedHits: string[];
  /**
   * Hits marked as a false positive after thorough manual review. These hits will never recur or be
   * updated once dismissed.
   */
  dismissedHits: string[];
  /** A comment submitted by a team member as part of reviewing a watchlist screening. */
  comment: string | null;
  /**
   * Information about the last change made to the parent object specifying what caused the change
   * as well as when it occurred.
   */
  auditTrail: WatchlistScreeningAuditTrail;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const watchlistScreeningIndividualReviewCreateResponseSchema: Schema<WatchlistScreeningIndividualReviewCreateResponse> =
  s.object<WatchlistScreeningIndividualReviewCreateResponse>({
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
