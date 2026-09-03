import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  updateIndividualScreeningRequestSearchTermsSchema,
  type UpdateIndividualScreeningRequestSearchTerms,
} from "./update-individual-screening-request-search-terms.js";
import {
  watchlistScreeningIndividualUpdateRequestResettableFieldSchema,
  type WatchlistScreeningIndividualUpdateRequestResettableField,
} from "./watchlist-screening-individual-update-request-resettable-field.js";
import {
  watchlistScreeningStatusSchema,
  type WatchlistScreeningStatus,
} from "./watchlist-screening-status.js";

export type WatchlistScreeningIndividualUpdateRequest = {
  watchlistScreeningId: string;
  searchTerms?: UpdateIndividualScreeningRequestSearchTerms | null;
  assignee?: string;
  status?: WatchlistScreeningStatus;
  clientUserId?: string;
  clientId?: string;
  secret?: string;
  resetFields?: WatchlistScreeningIndividualUpdateRequestResettableField[] | null;
};

export const watchlistScreeningIndividualUpdateRequestSchema: Schema<WatchlistScreeningIndividualUpdateRequest> =
  s.object<WatchlistScreeningIndividualUpdateRequest>({
    watchlistScreeningId: s.string(),
    searchTerms: s.optionalNullable(s.lazy(() => updateIndividualScreeningRequestSearchTermsSchema)),
    assignee: s.optional(s.string()),
    status: s.optional(s.lazy(() => watchlistScreeningStatusSchema)),
    clientUserId: s.optional(s.string()),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    resetFields: s.optionalNullable(
      s.array(s.lazy(() => watchlistScreeningIndividualUpdateRequestResettableFieldSchema)),
    ),
    _keysMap: {
      watchlistScreeningId: "watchlist_screening_id",
      searchTerms: "search_terms",
      clientUserId: "client_user_id",
      clientId: "client_id",
      resetFields: "reset_fields",
    },
  });
