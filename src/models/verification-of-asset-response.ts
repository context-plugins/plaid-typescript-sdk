import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetsSchema, type Assets } from "./assets.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type VerificationOfAssetResponse = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  assets: Assets;
};

export const verificationOfAssetResponseSchema: Schema<VerificationOfAssetResponse> =
  s.object<VerificationOfAssetResponse>({
    assets: assetsSchema,
    _keysMap: {
      assets: "ASSETS",
    },
  });
