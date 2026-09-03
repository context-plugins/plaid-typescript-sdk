import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeRefreshRequestOptionsSchema,
  type CreditBankIncomeRefreshRequestOptions,
} from "./credit-bank-income-refresh-request-options.js";

export type CreditBankIncomeRefreshRequest = {
  clientId?: string;
  secret?: string;
  userToken: string;
  userId?: string;
  options?: CreditBankIncomeRefreshRequestOptions;
};

export const creditBankIncomeRefreshRequestSchema: Schema<CreditBankIncomeRefreshRequest> =
  s.object<CreditBankIncomeRefreshRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.string(),
    userId: s.optional(s.string()),
    options: s.optional(s.lazy(() => creditBankIncomeRefreshRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      userId: "user_id",
    },
  });
