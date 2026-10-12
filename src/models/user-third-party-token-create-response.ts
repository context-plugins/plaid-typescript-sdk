import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * UserThirdPartyTokenCreateResponse defines the response schema for
 * `/user/third_party_token/create`
 */
export type UserThirdPartyTokenCreateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** The third-party user token associated with the requested User data. */
  thirdPartyUserToken: string;
};

export const userThirdPartyTokenCreateResponseSchema: Schema<UserThirdPartyTokenCreateResponse> =
  s.object<UserThirdPartyTokenCreateResponse>({
    requestId: s.string(),
    thirdPartyUserToken: s.string(),
    _keysMap: {
      requestId: "request_id",
      thirdPartyUserToken: "third_party_user_token",
    },
  });
