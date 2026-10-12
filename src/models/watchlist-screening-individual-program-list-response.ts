import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  individualWatchlistProgramSchema,
  type IndividualWatchlistProgram,
} from "./individual-watchlist-program.js";

/** Paginated list of individual watchlist screening programs */
export type WatchlistScreeningIndividualProgramListResponse = {
  /** List of individual watchlist screening programs */
  watchlistPrograms: IndividualWatchlistProgram[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const watchlistScreeningIndividualProgramListResponseSchema: Schema<WatchlistScreeningIndividualProgramListResponse> =
  s.object<WatchlistScreeningIndividualProgramListResponse>({
    watchlistPrograms: s.array(s.lazy(() => individualWatchlistProgramSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      watchlistPrograms: "watchlist_programs",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
