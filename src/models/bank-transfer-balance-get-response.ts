import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferBalanceSchema, type BankTransferBalance } from "./bank-transfer-balance.js";

export type BankTransferBalanceGetResponse = {
  balance: BankTransferBalance;
  originationAccountId: string | null;
  requestId: string;
};

export const bankTransferBalanceGetResponseSchema: Schema<BankTransferBalanceGetResponse> =
  s.object<BankTransferBalanceGetResponse>({
    balance: bankTransferBalanceSchema,
    originationAccountId: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      originationAccountId: "origination_account_id",
      requestId: "request_id",
    },
  });
