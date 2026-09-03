import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningEntityHistoryListRequest = {
  secret?: string;
  clientId?: string;
  entityWatchlistScreeningId: string;
  cursor?: string | null;
};

export const watchlistScreeningEntityHistoryListRequestSchema: Schema<WatchlistScreeningEntityHistoryListRequest> =
  s.object<WatchlistScreeningEntityHistoryListRequest>({
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    entityWatchlistScreeningId: s.string(),
    cursor: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      entityWatchlistScreeningId: "entity_watchlist_screening_id",
    },
  });
