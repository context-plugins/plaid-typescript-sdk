import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningRequestSearchTermsSchema,
  type WatchlistScreeningRequestSearchTerms,
} from "./watchlist-screening-request-search-terms.js";

export type WatchlistScreeningIndividualCreateRequest = {
  searchTerms: WatchlistScreeningRequestSearchTerms;
  clientUserId?: string;
  clientId?: string;
  secret?: string;
};

export const watchlistScreeningIndividualCreateRequestSchema: Schema<WatchlistScreeningIndividualCreateRequest> =
  s.object<WatchlistScreeningIndividualCreateRequest>({
    searchTerms: watchlistScreeningRequestSearchTermsSchema,
    clientUserId: s.optional(s.string()),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      searchTerms: "search_terms",
      clientUserId: "client_user_id",
      clientId: "client_id",
    },
  });
