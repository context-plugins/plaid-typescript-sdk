import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthErrorCodeSchema, type OAuthErrorCode } from "./oauth-error-code.js";

/** OAuth error response */
export type OAuthErrorResponse = {
  /** OAuth error code */
  error?: OAuthErrorCode;
  /** A human-readable description of the error */
  errorDescription?: string;
  /** A URI identifying the specific error */
  errorUri?: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const oAuthErrorResponseSchema: Schema<OAuthErrorResponse> = s.object<OAuthErrorResponse>({
  error: s.optional(s.lazy(() => oAuthErrorCodeSchema)),
  errorDescription: s.optional(s.string()),
  errorUri: s.optional(s.string()),
  requestId: s.string(),
  _keysMap: {
    errorDescription: "error_description",
    errorUri: "error_uri",
    requestId: "request_id",
  },
});
