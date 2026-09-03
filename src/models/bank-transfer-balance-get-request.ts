import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankTransferBalanceGetRequest = {
  clientId?: string;
  secret?: string;
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
