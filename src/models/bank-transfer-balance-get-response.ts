import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferBalanceSchema, type BankTransferBalance } from "./bank-transfer-balance.js";

/** Defines the response schema for `/bank_transfer/balance/get` */
export type BankTransferBalanceGetResponse = {
  /** Information about the balance of a bank transfer */
  balance: BankTransferBalance;
  /** The ID of the origination account that this balance belongs to. */
  originationAccountId: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
