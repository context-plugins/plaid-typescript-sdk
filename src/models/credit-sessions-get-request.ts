import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditSessionsGetRequest = {
  clientId?: string;
  secret?: string;
  userToken: string;
  userId?: string;
};

export const creditSessionsGetRequestSchema: Schema<CreditSessionsGetRequest> =
  s.object<CreditSessionsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.string(),
    userId: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      userId: "user_id",
    },
  });
