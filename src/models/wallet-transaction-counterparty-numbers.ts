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

export type WalletTransactionCounterpartyNumbers = {
  bacs?: WalletTransactionCounterpartyBacs | null;
  international?: WalletTransactionCounterpartyInternational | null;
};

export const walletTransactionCounterpartyNumbersSchema: Schema<WalletTransactionCounterpartyNumbers> =
  s.object<WalletTransactionCounterpartyNumbers>({
    bacs: s.optionalNullable(s.lazy(() => walletTransactionCounterpartyBacsSchema)),
    international: s.optionalNullable(s.lazy(() => walletTransactionCounterpartyInternationalSchema)),
  });
