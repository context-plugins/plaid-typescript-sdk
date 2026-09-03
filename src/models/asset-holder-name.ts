import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetHolderName = {
  fullName: string;
};

export const assetHolderNameSchema: Schema<AssetHolderName> = s.object<AssetHolderName>({
  fullName: s.string(),
  _keysMap: {
    fullName: "FullName",
  },
});
