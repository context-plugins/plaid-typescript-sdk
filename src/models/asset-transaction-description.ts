import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetTransactionDescription = {
  assetTransactionDescription: string;
};

export const assetTransactionDescriptionSchema: Schema<AssetTransactionDescription> =
  s.object<AssetTransactionDescription>({
    assetTransactionDescription: s.string(),
    _keysMap: {
      assetTransactionDescription: "AssetTransactionDescription",
    },
  });
