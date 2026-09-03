import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserThirdPartyTokenRemoveRequest = {
  clientId?: string;
  secret?: string;
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
