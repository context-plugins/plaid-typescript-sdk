import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetSchema, type Asset } from "./asset.js";

export type Assets = {
  asset: Asset[];
};

export const assetsSchema: Schema<Assets> = s.object<Assets>({
  asset: s.array(s.lazy(() => assetSchema)),
  _keysMap: {
    asset: "ASSET",
  },
});
