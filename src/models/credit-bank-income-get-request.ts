import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeGetRequestOptionsSchema,
  type CreditBankIncomeGetRequestOptions,
} from "./credit-bank-income-get-request-options.js";

/** CreditBankIncomeGetRequest defines the request schema for `/credit/bank_income/get`. */
export type CreditBankIncomeGetRequest = {
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
  /**
   * The user token associated with the user for which data is being requested. This field is used
   * only by customers with pre-existing integrations that already use the `user_token` field. All
   * other customers should use the `user_id` instead. For more details, see [New User
   * APIs](https://plaid.com/docs/api/users/user-apis).
   */
  userToken?: string;
  userId?: string;
  /** An optional object for `/credit/bank_income/get` request options. */
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
