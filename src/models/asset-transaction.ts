import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetTransactionDescriptionSchema,
  type AssetTransactionDescription,
} from "./asset-transaction-description.js";
import { assetTransactionDetailSchema, type AssetTransactionDetail } from "./asset-transaction-detail.js";

/** An object representing... */
export type AssetTransaction = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  assetTransactionDetail: AssetTransactionDetail;
  /**
   * Documentation not found in the MISMO model viewer and not provided by Freddie Mac. Note that
   * "DESCRIPTON" is an intentional misspelling matching the upstream MISMO field name.
   */
  assetTransactionDescripton: AssetTransactionDescription[];
};

export const assetTransactionSchema: Schema<AssetTransaction> = s.object<AssetTransaction>({
  assetTransactionDetail: assetTransactionDetailSchema,
  assetTransactionDescripton: s.array(s.lazy(() => assetTransactionDescriptionSchema)),
  _keysMap: {
    assetTransactionDetail: "ASSET_TRANSACTION_DETAIL",
    assetTransactionDescripton: "ASSET_TRANSACTION_DESCRIPTON",
  },
});
