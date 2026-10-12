import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** CraLoansUpdateResponse defines the response schema for `/cra/loans/update`. */
export type CraLoansUpdateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const craLoansUpdateResponseSchema: Schema<CraLoansUpdateResponse> = s.object<CraLoansUpdateResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
