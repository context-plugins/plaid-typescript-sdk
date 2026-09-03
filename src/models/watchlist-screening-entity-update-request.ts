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

export type WatchlistScreeningEntityUpdateRequest = {
  entityWatchlistScreeningId: string;
  searchTerms?: UpdateEntityScreeningRequestSearchTerms | null;
  assignee?: string;
  status?: WatchlistScreeningStatus;
  clientUserId?: string;
  clientId?: string;
  secret?: string;
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
