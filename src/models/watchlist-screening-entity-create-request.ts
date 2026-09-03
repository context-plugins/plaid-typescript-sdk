import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityWatchlistSearchTermsSchema,
  type EntityWatchlistSearchTerms,
} from "./entity-watchlist-search-terms.js";

export type WatchlistScreeningEntityCreateRequest = {
  searchTerms: EntityWatchlistSearchTerms;
  clientUserId?: string;
  clientId?: string;
  secret?: string;
};

export const watchlistScreeningEntityCreateRequestSchema: Schema<WatchlistScreeningEntityCreateRequest> =
  s.object<WatchlistScreeningEntityCreateRequest>({
    searchTerms: entityWatchlistSearchTermsSchema,
    clientUserId: s.optional(s.string()),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    _keysMap: {
      searchTerms: "search_terms",
      clientUserId: "client_user_id",
      clientId: "client_id",
    },
  });
