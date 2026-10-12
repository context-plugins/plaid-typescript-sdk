import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * SandboxTransactionsCreateResponse defines the response schema for `/sandbox/transactions/create`
 */
export type SandboxTransactionsCreateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxTransactionsCreateResponseSchema: Schema<SandboxTransactionsCreateResponse> =
  s.object<SandboxTransactionsCreateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
