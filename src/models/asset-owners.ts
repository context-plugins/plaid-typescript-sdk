import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetOwnerSchema, type AssetOwner } from "./asset-owner.js";

export type AssetOwners = {
  assetOwner: AssetOwner[];
};

export const assetOwnersSchema: Schema<AssetOwners> = s.object<AssetOwners>({
  assetOwner: s.array(s.lazy(() => assetOwnerSchema)),
  _keysMap: {
    assetOwner: "ASSET_OWNER",
  },
});
