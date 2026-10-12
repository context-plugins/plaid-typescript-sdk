import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningIndividualSchema,
  type WatchlistScreeningIndividual,
} from "./watchlist-screening-individual.js";

/** Paginated list of individual watchlist screenings. */
export type WatchlistScreeningIndividualHistoryListResponse = {
  /** List of individual watchlist screenings */
  watchlistScreenings: WatchlistScreeningIndividual[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const watchlistScreeningIndividualHistoryListResponseSchema: Schema<WatchlistScreeningIndividualHistoryListResponse> =
  s.object<WatchlistScreeningIndividualHistoryListResponse>({
    watchlistScreenings: s.array(s.lazy(() => watchlistScreeningIndividualSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      watchlistScreenings: "watchlist_screenings",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
