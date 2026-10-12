import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** StatementsRefreshResponse defines the response schema for `/statements/refresh` */
export type StatementsRefreshResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const statementsRefreshResponseSchema: Schema<StatementsRefreshResponse> =
  s.object<StatementsRefreshResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
