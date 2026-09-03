import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacAssetTransactionSchema,
  type CreditFreddieMacAssetTransaction,
} from "./credit-freddie-mac-asset-transaction.js";

export type CreditFreddieMacAssetTransactions = {
  assetTransaction: CreditFreddieMacAssetTransaction[];
};

export const creditFreddieMacAssetTransactionsSchema: Schema<CreditFreddieMacAssetTransactions> =
  s.object<CreditFreddieMacAssetTransactions>({
    assetTransaction: s.array(s.lazy(() => creditFreddieMacAssetTransactionSchema)),
    _keysMap: {
      assetTransaction: "ASSET_TRANSACTION",
    },
  });
