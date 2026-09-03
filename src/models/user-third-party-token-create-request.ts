import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserThirdPartyTokenCreateRequest = {
  clientId?: string;
  secret?: string;
  userToken?: string;
  thirdPartyClientId: string;
  expirationTime?: Date | null;
  userId?: string;
};

export const userThirdPartyTokenCreateRequestSchema: Schema<UserThirdPartyTokenCreateRequest> =
  s.object<UserThirdPartyTokenCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.optional(s.string()),
    thirdPartyClientId: s.string(),
    expirationTime: s.optionalNullable(s.dateTime()),
    userId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      thirdPartyClientId: "third_party_client_id",
      expirationTime: "expiration_time",
      userId: "user_id",
    },
  });
