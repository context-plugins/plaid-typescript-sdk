import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningIndividualProgramGetRequest = {
  watchlistProgramId: string;
  secret?: string;
  clientId?: string;
};

export const watchlistScreeningIndividualProgramGetRequestSchema: Schema<WatchlistScreeningIndividualProgramGetRequest> =
  s.object<WatchlistScreeningIndividualProgramGetRequest>({
    watchlistProgramId: s.string(),
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    _keysMap: {
      watchlistProgramId: "watchlist_program_id",
      clientId: "client_id",
    },
  });
