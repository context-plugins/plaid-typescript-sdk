import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetHoldingSchema, type AssetHolding } from "./asset-holding.js";

export type AssetHoldings = {
  assetHolding: AssetHolding[];
};

export const assetHoldingsSchema: Schema<AssetHoldings> = s.object<AssetHoldings>({
  assetHolding: s.array(s.lazy(() => assetHoldingSchema)),
  _keysMap: {
    assetHolding: "ASSET_HOLDING",
  },
});
