import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WatchlistScreeningEntityProgramListRequest = {
  secret?: string;
  clientId?: string;
  cursor?: string | null;
};

export const watchlistScreeningEntityProgramListRequestSchema: Schema<WatchlistScreeningEntityProgramListRequest> =
  s.object<WatchlistScreeningEntityProgramListRequest>({
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    cursor: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
    },
  });
