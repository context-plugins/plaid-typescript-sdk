import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  updateEntityScreeningRequestSearchTermsSchema,
  type UpdateEntityScreeningRequestSearchTerms,
} from "./update-entity-screening-request-search-terms.js";
import {
  watchlistScreeningEntityUpdateRequestResettableFieldSchema,
  type WatchlistScreeningEntityUpdateRequestResettableField,
} from "./watchlist-screening-entity-update-request-resettable-field.js";
import {
  watchlistScreeningStatusSchema,
  type WatchlistScreeningStatus,
} from "./watchlist-screening-status.js";

/** Request input for editing an entity watchlist screening */
export type WatchlistScreeningEntityUpdateRequest = {
  /** ID of the associated entity screening. */
  entityWatchlistScreeningId: string;
  /** Search terms for editing an entity watchlist screening */
  searchTerms?: UpdateEntityScreeningRequestSearchTerms | null;
  /**
   * ID of the associated user. To retrieve the email address or other details of the person
   * corresponding to this ID, use `/dashboard_user/get`.
   */
  assignee?: string;
  /**
   * A status enum indicating whether a screening is still pending review, has been rejected, or has
   * been cleared.
   */
  status?: WatchlistScreeningStatus;
  /**
   * A unique ID that identifies the end user in your system. Either a `user_id` or the
   * `client_user_id` must be provided. This ID can also be used to associate user-specific data
   * from other Plaid products. Financial Account Matching requires this field and the
   * `/link/token/create` `client_user_id` to be consistent. Personally identifiable information,
   * such as an email address or phone number, should not be used in the `client_user_id`.
   */
  clientUserId?: string;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** A list of fields to reset back to null */
  resetFields?: WatchlistScreeningEntityUpdateRequestResettableField[] | null;
};

export const watchlistScreeningEntityUpdateRequestSchema: Schema<WatchlistScreeningEntityUpdateRequest> =
  s.object<WatchlistScreeningEntityUpdateRequest>({
    entityWatchlistScreeningId: s.string(),
    searchTerms: s.optionalNullable(s.lazy(() => updateEntityScreeningRequestSearchTermsSchema)),
    assignee: s.optional(s.string()),
    status: s.optional(s.lazy(() => watchlistScreeningStatusSchema)),
    clientUserId: s.optional(s.string()),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    resetFields: s.optionalNullable(
      s.array(s.lazy(() => watchlistScreeningEntityUpdateRequestResettableFieldSchema)),
    ),
    _keysMap: {
      entityWatchlistScreeningId: "entity_watchlist_screening_id",
      searchTerms: "search_terms",
      clientUserId: "client_user_id",
      clientId: "client_id",
      resetFields: "reset_fields",
    },
  });
