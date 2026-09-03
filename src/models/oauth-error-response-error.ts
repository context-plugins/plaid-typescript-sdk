import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { oAuthErrorCodeSchema, type OAuthErrorCode } from "./oauth-error-code.js";

export type OAuthErrorResponseError = {
  error?: OAuthErrorCode;
  errorDescription?: string;
  errorUri?: string;
  requestId: string;
};

export const oAuthErrorResponseErrorSchema: Schema<OAuthErrorResponseError> =
  s.object<OAuthErrorResponseError>({
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
