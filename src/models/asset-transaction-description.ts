import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type AssetTransactionDescription = {
  /** Asset Transaction Description String up to 3 occurrences 1 required. */
  assetTransactionDescription: string;
};

export const assetTransactionDescriptionSchema: Schema<AssetTransactionDescription> =
  s.object<AssetTransactionDescription>({
    assetTransactionDescription: s.string(),
    _keysMap: {
      assetTransactionDescription: "AssetTransactionDescription",
    },
  });
