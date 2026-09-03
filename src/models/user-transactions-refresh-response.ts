import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refreshResultSchema, type RefreshResult } from "./refresh-result.js";

export type UserTransactionsRefreshResponse = {
  requestId?: string;
  userId?: string;
  results?: RefreshResult[];
};

export const userTransactionsRefreshResponseSchema: Schema<UserTransactionsRefreshResponse> =
  s.object<UserTransactionsRefreshResponse>({
    requestId: s.optional(s.string()),
    userId: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => refreshResultSchema))),
    _keysMap: {
      requestId: "request_id",
      userId: "user_id",
    },
  });
