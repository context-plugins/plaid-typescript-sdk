import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/bank_transfer/balance/get` */
export type BankTransferBalanceGetRequest = {
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
   * If multiple origination accounts are available, `origination_account_id` must be used to
   * specify the account for which balance will be returned.
   */
  originationAccountId?: string | null;
};

export const bankTransferBalanceGetRequestSchema: Schema<BankTransferBalanceGetRequest> =
  s.object<BankTransferBalanceGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originationAccountId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      originationAccountId: "origination_account_id",
    },
  });
