import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetDetailSchema, type AssetDetail } from "./asset-detail.js";
import { assetHolderSchema, type AssetHolder } from "./asset-holder.js";
import { assetHoldingsSchema, type AssetHoldings } from "./asset-holdings.js";
import { assetOwnersSchema, type AssetOwners } from "./asset-owners.js";
import {
  creditFreddieMacAssetTransactionsSchema,
  type CreditFreddieMacAssetTransactions,
} from "./credit-freddie-mac-asset-transactions.js";
import { validationSourcesSchema, type ValidationSources } from "./validation-sources.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type CreditFreddieMacAsset = {
  /** Details about an asset. */
  assetDetail: AssetDetail;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  assetOwners: AssetOwners;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  assetHolder: AssetHolder;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  assetHoldings?: AssetHoldings;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  assetTransactions: CreditFreddieMacAssetTransactions;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  validationSources: ValidationSources;
};

export const creditFreddieMacAssetSchema: Schema<CreditFreddieMacAsset> = s.object<CreditFreddieMacAsset>({
  assetDetail: assetDetailSchema,
  assetOwners: assetOwnersSchema,
  assetHolder: assetHolderSchema,
  assetHoldings: s.optional(s.lazy(() => assetHoldingsSchema)),
  assetTransactions: creditFreddieMacAssetTransactionsSchema,
  validationSources: validationSourcesSchema,
  _keysMap: {
    assetDetail: "ASSET_DETAIL",
    assetOwners: "ASSET_OWNERS",
    assetHolder: "ASSET_HOLDER",
    assetHoldings: "ASSET_HOLDINGS",
    assetTransactions: "ASSET_TRANSACTIONS",
    validationSources: "VALIDATION_SOURCES",
  },
});
