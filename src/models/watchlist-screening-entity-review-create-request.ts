import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningEntityReviewCreateRequest = {
  confirmedHits: string[];
  dismissedHits: string[];
  comment?: string | null;
  clientId?: string;
  secret?: string;
  entityWatchlistScreeningId: string;
};

export const watchlistScreeningEntityReviewCreateRequestSchema: Schema<WatchlistScreeningEntityReviewCreateRequest> =
  s.object<WatchlistScreeningEntityReviewCreateRequest>({
    confirmedHits: s.array(s.string()),
    dismissedHits: s.array(s.string()),
    comment: s.optionalNullable(s.string()),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    entityWatchlistScreeningId: s.string(),
    _keysMap: {
      confirmedHits: "confirmed_hits",
      dismissedHits: "dismissed_hits",
      clientId: "client_id",
      entityWatchlistScreeningId: "entity_watchlist_screening_id",
    },
  });
