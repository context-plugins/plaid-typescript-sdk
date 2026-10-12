import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request input for listing hits for an entity watchlist screening */
export type WatchlistScreeningEntityHitListRequest = {
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
  /** ID of the associated entity screening. */
  entityWatchlistScreeningId: string;
  /** An identifier that determines which page of results you receive. */
  cursor?: string | null;
};

export const watchlistScreeningEntityHitListRequestSchema: Schema<WatchlistScreeningEntityHitListRequest> =
  s.object<WatchlistScreeningEntityHitListRequest>({
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    entityWatchlistScreeningId: s.string(),
    cursor: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      entityWatchlistScreeningId: "entity_watchlist_screening_id",
    },
  });
