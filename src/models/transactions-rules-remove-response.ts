import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * TransactionsRulesRemoveResponse defines the response schema for
 * `/beta/transactions/rules/v1/remove`
 */
export type TransactionsRulesRemoveResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transactionsRulesRemoveResponseSchema: Schema<TransactionsRulesRemoveResponse> =
  s.object<TransactionsRulesRemoveResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
