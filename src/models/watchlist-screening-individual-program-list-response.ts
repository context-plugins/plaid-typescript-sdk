import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  individualWatchlistProgramSchema,
  type IndividualWatchlistProgram,
} from "./individual-watchlist-program.js";

export type WatchlistScreeningIndividualProgramListResponse = {
  watchlistPrograms: IndividualWatchlistProgram[];
  nextCursor: string | null;
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
