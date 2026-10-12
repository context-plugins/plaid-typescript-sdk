import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetSchema, type Asset } from "./asset.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type Assets = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  asset: Asset[];
};

export const assetsSchema: Schema<Assets> = s.object<Assets>({
  asset: s.array(s.lazy(() => assetSchema)),
  _keysMap: {
    asset: "ASSET",
  },
});
