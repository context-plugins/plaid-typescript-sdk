import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditBankEmploymentGetRequest = {
  clientId?: string;
  secret?: string;
  userToken: string;
};

export const creditBankEmploymentGetRequestSchema: Schema<CreditBankEmploymentGetRequest> =
  s.object<CreditBankEmploymentGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.string(),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
    },
  });
