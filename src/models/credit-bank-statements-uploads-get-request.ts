import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankStatementsUploadsGetRequestOptionsSchema,
  type CreditBankStatementsUploadsGetRequestOptions,
} from "./credit-bank-statements-uploads-get-request-options.js";

export type CreditBankStatementsUploadsGetRequest = {
  clientId?: string;
  secret?: string;
  userToken: string;
  userId?: string;
  options?: CreditBankStatementsUploadsGetRequestOptions;
};

export const creditBankStatementsUploadsGetRequestSchema: Schema<CreditBankStatementsUploadsGetRequest> =
  s.object<CreditBankStatementsUploadsGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userToken: s.string(),
    userId: s.optional(s.string()),
    options: s.optional(s.lazy(() => creditBankStatementsUploadsGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      userToken: "user_token",
      userId: "user_id",
    },
  });
