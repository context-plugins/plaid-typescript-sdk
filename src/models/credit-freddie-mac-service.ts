import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacVerificationOfAssetSchema,
  type CreditFreddieMacVerificationOfAsset,
} from "./credit-freddie-mac-verification-of-asset.js";
import { statusesSchema, type Statuses } from "./statuses.js";

/**
 * A collection of details related to a fulfillment service or product in terms of request, process
 * and result.
 */
export type CreditFreddieMacService = {
  verificationOfAsset: CreditFreddieMacVerificationOfAsset[];
  /** A collection of STATUS containers. */
  statuses: Statuses;
};

export const creditFreddieMacServiceSchema: Schema<CreditFreddieMacService> =
  s.object<CreditFreddieMacService>({
    verificationOfAsset: s.array(s.lazy(() => creditFreddieMacVerificationOfAssetSchema)),
    statuses: statusesSchema,
    _keysMap: {
      verificationOfAsset: "VERIFICATION_OF_ASSET",
      statuses: "STATUSES",
    },
  });
