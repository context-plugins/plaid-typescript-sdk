import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WalletTransactionCounterpartyBacs = {
  account?: string;
  sortCode?: string;
};

export const walletTransactionCounterpartyBacsSchema: Schema<WalletTransactionCounterpartyBacs> =
  s.object<WalletTransactionCounterpartyBacs>({
    account: s.optional(s.string()),
    sortCode: s.optional(s.string()),
    _keysMap: {
      sortCode: "sort_code",
    },
  });
