import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningEntityProgramGetRequest = {
  entityWatchlistProgramId: string;
  secret?: string;
  clientId?: string;
};

export const watchlistScreeningEntityProgramGetRequestSchema: Schema<WatchlistScreeningEntityProgramGetRequest> =
  s.object<WatchlistScreeningEntityProgramGetRequest>({
    entityWatchlistProgramId: s.string(),
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    _keysMap: {
      entityWatchlistProgramId: "entity_watchlist_program_id",
      clientId: "client_id",
    },
  });
