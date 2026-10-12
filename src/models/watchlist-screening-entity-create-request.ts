import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entityWatchlistSearchTermsSchema,
  type EntityWatchlistSearchTerms,
} from "./entity-watchlist-search-terms.js";

/** Request input for creating an entity watchlist screening */
export type WatchlistScreeningEntityCreateRequest = {
  /** Search inputs for creating an entity watchlist screening */
  searchTerms: EntityWatchlistSearchTerms;
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
