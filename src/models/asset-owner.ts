import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type AssetOwner = {
  /** Account Owner Full Name. */
  assetOwnerText: string | null;
};

export const assetOwnerSchema: Schema<AssetOwner> = s.object<AssetOwner>({
  assetOwnerText: s.nullable(s.string()),
  _keysMap: {
    assetOwnerText: "AssetOwnerText",
  },
});
