import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningIndividualProgramListRequest = {
  secret?: string;
  clientId?: string;
  cursor?: string | null;
};

export const watchlistScreeningIndividualProgramListRequestSchema: Schema<WatchlistScreeningIndividualProgramListRequest> =
  s.object<WatchlistScreeningIndividualProgramListRequest>({
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    cursor: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
    },
  });
