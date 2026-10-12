import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditFreddieMacAssetsSchema, type CreditFreddieMacAssets } from "./credit-freddie-mac-assets.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type CreditFreddieMacVerificationOfAssetResponse = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  assets: CreditFreddieMacAssets;
};

export const creditFreddieMacVerificationOfAssetResponseSchema: Schema<CreditFreddieMacVerificationOfAssetResponse> =
  s.object<CreditFreddieMacVerificationOfAssetResponse>({
    assets: creditFreddieMacAssetsSchema,
    _keysMap: {
      assets: "ASSETS",
    },
  });
