import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFreddieMacAssetSchema, type CreditFreddieMacAsset } from "./credit-freddie-mac-asset.js";

export type CreditFreddieMacAssets = {
  asset: CreditFreddieMacAsset[];
};

export const creditFreddieMacAssetsSchema: Schema<CreditFreddieMacAssets> = s.object<CreditFreddieMacAssets>({
  asset: s.array(s.lazy(() => creditFreddieMacAssetSchema)),
  _keysMap: {
    asset: "ASSET",
  },
});
