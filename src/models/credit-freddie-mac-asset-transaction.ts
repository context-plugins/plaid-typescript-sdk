import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetTransactionDescriptionSchema,
  type AssetTransactionDescription,
} from "./asset-transaction-description.js";
import { assetTransactionDetailSchema, type AssetTransactionDetail } from "./asset-transaction-detail.js";

/** An object representing... */
export type CreditFreddieMacAssetTransaction = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  assetTransactionDetail: AssetTransactionDetail;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
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
