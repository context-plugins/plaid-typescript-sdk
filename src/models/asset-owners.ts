import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetOwnerSchema, type AssetOwner } from "./asset-owner.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type AssetOwners = {
  /** A list of up to 4 account owners' full names. */
  assetOwner: AssetOwner[];
};

export const assetOwnersSchema: Schema<AssetOwners> = s.object<AssetOwners>({
  assetOwner: s.array(s.lazy(() => assetOwnerSchema)),
  _keysMap: {
    assetOwner: "ASSET_OWNER",
  },
});
