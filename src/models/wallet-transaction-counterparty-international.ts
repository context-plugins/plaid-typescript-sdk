import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** International Bank Account Number for a Wallet Transaction */
export type WalletTransactionCounterpartyInternational = {
  /** International Bank Account Number (IBAN). */
  iban?: string;
};

export const walletTransactionCounterpartyInternationalSchema: Schema<WalletTransactionCounterpartyInternational> =
  s.object<WalletTransactionCounterpartyInternational>({
    iban: s.optional(s.string()),
  });
