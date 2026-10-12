import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityWatchlistProgramSchema, type EntityWatchlistProgram } from "./entity-watchlist-program.js";

/** Paginated list of entity watchlist screening programs */
export type WatchlistScreeningEntityProgramListResponse = {
  /** List of entity watchlist screening programs */
  entityWatchlistPrograms: EntityWatchlistProgram[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
