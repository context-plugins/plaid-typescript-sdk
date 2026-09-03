import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityWatchlistProgramSchema, type EntityWatchlistProgram } from "./entity-watchlist-program.js";

export type WatchlistScreeningEntityProgramListResponse = {
  entityWatchlistPrograms: EntityWatchlistProgram[];
  nextCursor: string | null;
  requestId: string;
};

export const watchlistScreeningEntityProgramListResponseSchema: Schema<WatchlistScreeningEntityProgramListResponse> =
  s.object<WatchlistScreeningEntityProgramListResponse>({
    entityWatchlistPrograms: s.array(s.lazy(() => entityWatchlistProgramSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      entityWatchlistPrograms: "entity_watchlist_programs",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
