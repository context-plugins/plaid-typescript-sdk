import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refreshResultSchema, type RefreshResult } from "./refresh-result.js";

/**
 * UserFinancialDataRefreshResponse defines the response schema for `/user/financial_data/refresh`
 */
export type UserFinancialDataRefreshResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId?: string;
  /** The user ID associated with the refresh request. */
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
