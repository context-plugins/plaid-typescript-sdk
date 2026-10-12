import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Successful OAuth token revoke response */
export type OAuthRevokeResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const oAuthRevokeResponseSchema: Schema<OAuthRevokeResponse> = s.object<OAuthRevokeResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
