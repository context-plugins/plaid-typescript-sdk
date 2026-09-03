import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningIndividualGetRequest = {
  watchlistScreeningId: string;
  secret?: string;
  clientId?: string;
};

export const watchlistScreeningIndividualGetRequestSchema: Schema<WatchlistScreeningIndividualGetRequest> =
  s.object<WatchlistScreeningIndividualGetRequest>({
    watchlistScreeningId: s.string(),
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    _keysMap: {
      watchlistScreeningId: "watchlist_screening_id",
      clientId: "client_id",
    },
  });
