import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusesSchema, type Statuses } from "./statuses.js";
import { verificationOfAssetSchema, type VerificationOfAsset } from "./verification-of-asset.js";

export type Service = {
  verificationOfAsset: VerificationOfAsset;
  statuses: Statuses;
};

export const serviceSchema: Schema<Service> = s.object<Service>({
  verificationOfAsset: verificationOfAssetSchema,
  statuses: statusesSchema,
  _keysMap: {
    verificationOfAsset: "VERIFICATION_OF_ASSET",
    statuses: "STATUSES",
  },
});
