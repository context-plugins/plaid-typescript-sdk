import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * UserThirdPartyTokenRemoveRequest defines the request schema for `/user/third_party_token/remove`
 */
export type UserThirdPartyTokenRemoveRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The third-party user token associated with the requested User data. */
  thirdPartyUserToken: string;
};

export const userThirdPartyTokenRemoveRequestSchema: Schema<UserThirdPartyTokenRemoveRequest> =
  s.object<UserThirdPartyTokenRemoveRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    thirdPartyUserToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      thirdPartyUserToken: "third_party_user_token",
    },
  });
