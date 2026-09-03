import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refreshResultSchema, type RefreshResult } from "./refresh-result.js";

export type UserFinancialDataRefreshResponse = {
  requestId?: string;
  userId?: string;
  results?: RefreshResult[];
};

export const userFinancialDataRefreshResponseSchema: Schema<UserFinancialDataRefreshResponse> =
  s.object<UserFinancialDataRefreshResponse>({
    requestId: s.optional(s.string()),
    userId: s.optional(s.string()),
    results: s.optional(s.array(s.lazy(() => refreshResultSchema))),
    _keysMap: {
      requestId: "request_id",
      userId: "user_id",
    },
  });
