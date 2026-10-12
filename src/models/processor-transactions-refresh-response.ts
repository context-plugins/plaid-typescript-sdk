import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ProcessorTransactionsRefreshResponse defines the response schema for
 * `/processor/transactions/refresh`
 */
export type ProcessorTransactionsRefreshResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const processorTransactionsRefreshResponseSchema: Schema<ProcessorTransactionsRefreshResponse> =
  s.object<ProcessorTransactionsRefreshResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
