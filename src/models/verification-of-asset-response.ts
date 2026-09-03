import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetsSchema, type Assets } from "./assets.js";

export type VerificationOfAssetResponse = {
  assets: Assets;
};

export const verificationOfAssetResponseSchema: Schema<VerificationOfAssetResponse> =
  s.object<VerificationOfAssetResponse>({
    assets: assetsSchema,
    _keysMap: {
      assets: "ASSETS",
    },
  });
