import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditEmploymentGetRequest = {
  clientId?: string;
  secret?: string;
  userToken: string;
};

export const creditEmploymentGetRequestSchema: Schema<CreditEmploymentGetRequest> =
  s.object<CreditEmploymentGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
    },
  });
