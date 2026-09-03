import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetOwner = {
  assetOwnerText: string | null;
};

export const assetOwnerSchema: Schema<AssetOwner> = s.object<AssetOwner>({
  assetOwnerText: s.nullable(s.string()),
  _keysMap: {
    assetOwnerText: "AssetOwnerText",
  },
});
