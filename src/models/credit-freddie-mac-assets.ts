import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFreddieMacAssetSchema, type CreditFreddieMacAsset } from "./credit-freddie-mac-asset.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type CreditFreddieMacAssets = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  asset: CreditFreddieMacAsset[];
};

export const creditFreddieMacAssetsSchema: Schema<CreditFreddieMacAssets> = s.object<CreditFreddieMacAssets>({
  asset: s.array(s.lazy(() => creditFreddieMacAssetSchema)),
  _keysMap: {
    asset: "ASSET",
  },
});
