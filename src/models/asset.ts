import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetDetailSchema, type AssetDetail } from "./asset-detail.js";
import { assetHolderSchema, type AssetHolder } from "./asset-holder.js";
import { assetOwnersSchema, type AssetOwners } from "./asset-owners.js";
import { assetTransactionsSchema, type AssetTransactions } from "./asset-transactions.js";
import { validationSourcesSchema, type ValidationSources } from "./validation-sources.js";

export type Asset = {
  assetDetail: AssetDetail;
  assetOwners: AssetOwners;
  assetHolder: AssetHolder;
  assetTransactions: AssetTransactions;
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
