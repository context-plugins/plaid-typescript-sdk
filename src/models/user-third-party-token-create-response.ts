import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserThirdPartyTokenCreateResponse = {
  requestId: string;
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
