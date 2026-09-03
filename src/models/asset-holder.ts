import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetHolderNameSchema, type AssetHolderName } from "./asset-holder-name.js";

export type AssetHolder = {
  name: AssetHolderName;
};

export const assetHolderSchema: Schema<AssetHolder> = s.object<AssetHolder>({
  name: assetHolderNameSchema,
  _keysMap: {
    name: "NAME",
  },
});
