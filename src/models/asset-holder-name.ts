import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type AssetHolderName = {
  /** The unparsed name of either an individual or a legal entity. */
  fullName: string;
};

export const assetHolderNameSchema: Schema<AssetHolderName> = s.object<AssetHolderName>({
  fullName: s.string(),
  _keysMap: {
    fullName: "FullName",
  },
});
