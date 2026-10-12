import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetHolderNameSchema, type AssetHolderName } from "./asset-holder-name.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type AssetHolder = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  name: AssetHolderName;
};

export const assetHolderSchema: Schema<AssetHolder> = s.object<AssetHolder>({
  name: assetHolderNameSchema,
  _keysMap: {
    name: "NAME",
  },
});
