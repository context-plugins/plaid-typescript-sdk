import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetDetailSchema, type AssetDetail } from "./asset-detail.js";
import { assetHolderSchema, type AssetHolder } from "./asset-holder.js";
import { assetOwnersSchema, type AssetOwners } from "./asset-owners.js";
import { assetTransactionsSchema, type AssetTransactions } from "./asset-transactions.js";
import { validationSourcesSchema, type ValidationSources } from "./validation-sources.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type Asset = {
  /** Details about an asset. */
  assetDetail: AssetDetail;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  assetOwners: AssetOwners;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  assetHolder: AssetHolder;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  assetTransactions: AssetTransactions;
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  validationSources: ValidationSources;
};

export const assetSchema: Schema<Asset> = s.object<Asset>({
  assetDetail: assetDetailSchema,
  assetOwners: assetOwnersSchema,
  assetHolder: assetHolderSchema,
  assetTransactions: assetTransactionsSchema,
  validationSources: validationSourcesSchema,
  _keysMap: {
    assetDetail: "ASSET_DETAIL",
    assetOwners: "ASSET_OWNERS",
    assetHolder: "ASSET_HOLDER",
    assetTransactions: "ASSET_TRANSACTIONS",
    validationSources: "VALIDATION_SOURCES",
  },
});
