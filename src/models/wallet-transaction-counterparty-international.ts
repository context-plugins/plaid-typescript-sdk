import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WalletTransactionCounterpartyInternational = {
  iban?: string;
};

export const walletTransactionCounterpartyInternationalSchema: Schema<WalletTransactionCounterpartyInternational> =
  s.object<WalletTransactionCounterpartyInternational>({
    iban: s.optional(s.string()),
  });
