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

/**
 * The entity screening object allows you to represent an entity in your system, update its profile,
 * and search for it on various watchlists. Note: Rejected entity screenings will not receive new
 * hits, regardless of entity program configuration.
 */
export type WatchlistScreeningEntityUpdateResponse = {
  /** ID of the associated entity screening. */
  id: string;
  /** Search terms associated with an entity used for searching against watchlists */
  searchTerms: EntityWatchlistScreeningSearchTerms;
  /**
   * ID of the associated user. To retrieve the email address or other details of the person
   * corresponding to this ID, use `/dashboard_user/get`.
   */
  assignee: string | null;
  /**
   * A status enum indicating whether a screening is still pending review, has been rejected, or has
   * been cleared.
   */
  status: WatchlistScreeningStatus;
  /**
   * A unique ID that identifies the end user in your system. Either a `user_id` or the
   * `client_user_id` must be provided. This ID can also be used to associate user-specific data
   * from other Plaid products. Financial Account Matching requires this field and the
   * `/link/token/create` `client_user_id` to be consistent. Personally identifiable information,
   * such as an email address or phone number, should not be used in the `client_user_id`.
   */
  clientUserId: string | null;
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

export const watchlistScreeningEntityUpdateResponseSchema: Schema<WatchlistScreeningEntityUpdateResponse> =
  s.object<WatchlistScreeningEntityUpdateResponse>({
    id: s.string(),
    searchTerms: entityWatchlistScreeningSearchTermsSchema,
    assignee: s.nullable(s.string()),
    status: watchlistScreeningStatusSchema,
    clientUserId: s.nullable(s.string()),
    auditTrail: watchlistScreeningAuditTrailSchema,
    requestId: s.string(),
    _keysMap: {
      searchTerms: "search_terms",
      clientUserId: "client_user_id",
      auditTrail: "audit_trail",
      requestId: "request_id",
    },
  });
