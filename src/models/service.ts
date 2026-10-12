import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusesSchema, type Statuses } from "./statuses.js";
import { verificationOfAssetSchema, type VerificationOfAsset } from "./verification-of-asset.js";

/**
 * A collection of details related to a fulfillment service or product in terms of request, process
 * and result.
 */
export type Service = {
  /** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
  verificationOfAsset: VerificationOfAsset;
  /** A collection of STATUS containers. */
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
