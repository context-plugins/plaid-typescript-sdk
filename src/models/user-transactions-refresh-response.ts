import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refreshResultSchema, type RefreshResult } from "./refresh-result.js";

/** UserTransactionsRefreshResponse defines the response schema for `/user/transactions/refresh` */
export type UserTransactionsRefreshResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
  /** The user ID associated with the refresh request. */
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
