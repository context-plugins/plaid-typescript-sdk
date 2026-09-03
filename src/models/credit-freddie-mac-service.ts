import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacVerificationOfAssetSchema,
  type CreditFreddieMacVerificationOfAsset,
} from "./credit-freddie-mac-verification-of-asset.js";
import { statusesSchema, type Statuses } from "./statuses.js";

export type CreditFreddieMacService = {
  verificationOfAsset: CreditFreddieMacVerificationOfAsset[];
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
