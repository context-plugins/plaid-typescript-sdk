import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The account number and sort code of the counterparty's account */
export type WalletTransactionCounterpartyBacs = {
  /** The account number of the account. Maximum of 10 characters. */
  account?: string;
  /** The 6-character sort code of the account. */
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
