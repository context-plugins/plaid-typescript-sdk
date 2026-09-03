import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetTransactionDescriptionSchema,
  type AssetTransactionDescription,
} from "./asset-transaction-description.js";
import { assetTransactionDetailSchema, type AssetTransactionDetail } from "./asset-transaction-detail.js";

export type CreditFreddieMacAssetTransaction = {
  assetTransactionDetail: AssetTransactionDetail;
  assetTransactionDescription: AssetTransactionDescription[];
};

export const creditFreddieMacAssetTransactionSchema: Schema<CreditFreddieMacAssetTransaction> =
  s.object<CreditFreddieMacAssetTransaction>({
    assetTransactionDetail: assetTransactionDetailSchema,
    assetTransactionDescription: s.array(s.lazy(() => assetTransactionDescriptionSchema)),
    _keysMap: {
      assetTransactionDetail: "ASSET_TRANSACTION_DETAIL",
      assetTransactionDescription: "ASSET_TRANSACTION_DESCRIPTION",
    },
  });
