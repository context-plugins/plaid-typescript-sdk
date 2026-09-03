import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { originatingFundSourceSchema, type OriginatingFundSource } from "./originating-fund-source.js";
import { walletTransactionAmountSchema, type WalletTransactionAmount } from "./wallet-transaction-amount.js";
import {
  walletTransactionCounterpartySchema,
  type WalletTransactionCounterparty,
} from "./wallet-transaction-counterparty.js";

export type WalletTransactionExecuteRequest = {
  clientId?: string;
  secret?: string;
  idempotencyKey: string;
  walletId: string;
  counterparty: WalletTransactionCounterparty;
  amount: WalletTransactionAmount;
  reference: string;
  originatingFundSource?: OriginatingFundSource | null;
};

export const walletTransactionExecuteRequestSchema: Schema<WalletTransactionExecuteRequest> =
  s.object<WalletTransactionExecuteRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    idempotencyKey: s.string(),
    walletId: s.string(),
    counterparty: walletTransactionCounterpartySchema,
    amount: walletTransactionAmountSchema,
    reference: s.string(),
    originatingFundSource: s.optionalNullable(s.lazy(() => originatingFundSourceSchema)),
    _keysMap: {
      clientId: "client_id",
      idempotencyKey: "idempotency_key",
      walletId: "wallet_id",
      originatingFundSource: "originating_fund_source",
    },
  });
