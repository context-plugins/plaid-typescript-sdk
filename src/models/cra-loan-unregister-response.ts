import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** CraLoanUnregisterResponse defines the response schema for `/cra/loans/unregister`. */
export type CraLoanUnregisterResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const craLoanUnregisterResponseSchema: Schema<CraLoanUnregisterResponse> =
  s.object<CraLoanUnregisterResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
