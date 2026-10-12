import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** TransactionsRefreshResponse defines the response schema for `/transactions/refresh` */
export type TransactionsRefreshResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transactionsRefreshResponseSchema: Schema<TransactionsRefreshResponse> =
  s.object<TransactionsRefreshResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
