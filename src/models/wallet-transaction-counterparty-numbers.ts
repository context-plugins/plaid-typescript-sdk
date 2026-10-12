import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  walletTransactionCounterpartyBacsSchema,
  type WalletTransactionCounterpartyBacs,
} from "./wallet-transaction-counterparty-bacs.js";
import {
  walletTransactionCounterpartyInternationalSchema,
  type WalletTransactionCounterpartyInternational,
} from "./wallet-transaction-counterparty-international.js";

/** The counterparty's bank account numbers. Exactly one of IBAN or Bacs data is required. */
export type WalletTransactionCounterpartyNumbers = {
  /** The account number and sort code of the counterparty's account */
  bacs?: WalletTransactionCounterpartyBacs | null;
  /** International Bank Account Number for a Wallet Transaction */
  international?: WalletTransactionCounterpartyInternational | null;
};

export const walletTransactionCounterpartyNumbersSchema: Schema<WalletTransactionCounterpartyNumbers> =
  s.object<WalletTransactionCounterpartyNumbers>({
    bacs: s.optionalNullable(s.lazy(() => walletTransactionCounterpartyBacsSchema)),
    international: s.optionalNullable(s.lazy(() => walletTransactionCounterpartyInternationalSchema)),
  });
