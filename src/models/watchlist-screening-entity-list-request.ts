import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  watchlistScreeningStatusSchema,
  type WatchlistScreeningStatus,
} from "./watchlist-screening-status.js";

export type WatchlistScreeningEntityListRequest = {
  secret?: string;
  clientId?: string;
  entityWatchlistProgramId: string;
  clientUserId?: string;
  status?: WatchlistScreeningStatus;
  assignee?: string;
  cursor?: string | null;
};

export const watchlistScreeningEntityListRequestSchema: Schema<WatchlistScreeningEntityListRequest> =
  s.object<WatchlistScreeningEntityListRequest>({
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    entityWatchlistProgramId: s.string(),
    clientUserId: s.optional(s.string()),
    status: s.optional(s.lazy(() => watchlistScreeningStatusSchema)),
    assignee: s.optional(s.string()),
    cursor: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      entityWatchlistProgramId: "entity_watchlist_program_id",
      clientUserId: "client_user_id",
    },
  });
