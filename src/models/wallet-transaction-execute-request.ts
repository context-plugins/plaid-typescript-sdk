import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { originatingFundSourceSchema, type OriginatingFundSource } from "./originating-fund-source.js";
import { walletTransactionAmountSchema, type WalletTransactionAmount } from "./wallet-transaction-amount.js";
import {
  walletTransactionCounterpartySchema,
  type WalletTransactionCounterparty,
} from "./wallet-transaction-counterparty.js";

/** WalletTransactionExecuteRequest defines the request schema for `/wallet/transaction/execute` */
export type WalletTransactionExecuteRequest = {
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
   * A random key provided by the client, per unique wallet transaction. Maximum of 128 characters.
   *
   * The API supports idempotency for safely retrying requests without accidentally performing the
   * same operation twice. If a request to execute a wallet transaction fails due to a network
   * connection error, then after a minimum delay of one minute, you can retry the request with the
   * same idempotency key to guarantee that only a single wallet transaction is created. If the
   * request was successfully processed, it will prevent any transaction that uses the same
   * idempotency key, and was received within 24 hours of the first request, from being processed.
   */
  idempotencyKey: string;
  /** The ID of the e-wallet to debit from */
  walletId: string;
  /** An object representing the e-wallet transaction's counterparty */
  counterparty: WalletTransactionCounterparty;
  /** The amount and currency of a transaction */
  amount: WalletTransactionAmount;
  /**
   * A reference for the transaction. This must be an alphanumeric string with 6 to 18 characters
   * and must not contain any special characters or spaces. Ensure that the `reference` field is
   * unique for each transaction.
   */
  reference: string;
  /**
   * The original source of the funds. This field is required by local regulation for certain
   * businesses (e.g. money remittance) to send payouts to recipients in the EU and UK.
   */
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
