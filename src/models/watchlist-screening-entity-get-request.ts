import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request input for fetching an entity watchlist screening */
export type WatchlistScreeningEntityGetRequest = {
  /** ID of the associated entity screening. */
  entityWatchlistScreeningId: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
};

export const watchlistScreeningEntityGetRequestSchema: Schema<WatchlistScreeningEntityGetRequest> =
  s.object<WatchlistScreeningEntityGetRequest>({
    entityWatchlistScreeningId: s.string(),
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    _keysMap: {
      entityWatchlistScreeningId: "entity_watchlist_screening_id",
      clientId: "client_id",
    },
  });
