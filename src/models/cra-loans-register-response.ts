import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** CraLoansRegisterResponse defines the response schema for `/cra/loans/register`. */
export type CraLoansRegisterResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const craLoansRegisterResponseSchema: Schema<CraLoansRegisterResponse> =
  s.object<CraLoansRegisterResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
