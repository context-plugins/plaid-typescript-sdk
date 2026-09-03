import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningEntityGetRequest = {
  entityWatchlistScreeningId: string;
  secret?: string;
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
