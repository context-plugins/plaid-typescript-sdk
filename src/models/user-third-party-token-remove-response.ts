import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * UserThirdPartyTokenRemoveResponse defines the response schema for
 * `/user/third_party_token/remove`
 */
export type UserThirdPartyTokenRemoveResponse = {
  /** `true` if the third-party user token was successfully removed. */
  removed: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const userThirdPartyTokenRemoveResponseSchema: Schema<UserThirdPartyTokenRemoveResponse> =
  s.object<UserThirdPartyTokenRemoveResponse>({
    removed: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
