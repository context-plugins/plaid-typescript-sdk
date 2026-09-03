import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeGetRequestOptionsSchema,
  type CreditBankIncomeGetRequestOptions,
} from "./credit-bank-income-get-request-options.js";

export type CreditBankIncomeGetRequest = {
  clientId?: string;
  secret?: string;
  userToken?: string;
  userId?: string;
  options?: CreditBankIncomeGetRequestOptions;
};

export const creditBankIncomeGetRequestSchema: Schema<CreditBankIncomeGetRequest> =
  s.object<CreditBankIncomeGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.optional(s.string()),
    userId: s.optional(s.string()),
    options: s.optional(s.lazy(() => creditBankIncomeGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      userId: "user_id",
    },
  });
