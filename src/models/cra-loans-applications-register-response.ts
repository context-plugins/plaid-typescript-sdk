import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CraLoansApplicationsRegisterResponse defines the response schema for
 * `/cra/loans/applications/register`.
 */
export type CraLoansApplicationsRegisterResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const craLoansApplicationsRegisterResponseSchema: Schema<CraLoansApplicationsRegisterResponse> =
  s.object<CraLoansApplicationsRegisterResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
