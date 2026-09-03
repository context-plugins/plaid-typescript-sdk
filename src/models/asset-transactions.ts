import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetTransactionSchema, type AssetTransaction } from "./asset-transaction.js";

export type AssetTransactions = {
  assetTransaction: AssetTransaction[];
};

export const assetTransactionsSchema: Schema<AssetTransactions> = s.object<AssetTransactions>({
  assetTransaction: s.array(s.lazy(() => assetTransactionSchema)),
  _keysMap: {
    assetTransaction: "ASSET_TRANSACTION",
  },
});
