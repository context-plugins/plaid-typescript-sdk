import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconAccountRiskEvaluateRequestOptions = {
  accountIds?: string[];
};

export const beaconAccountRiskEvaluateRequestOptionsSchema: Schema<BeaconAccountRiskEvaluateRequestOptions> =
  s.object<BeaconAccountRiskEvaluateRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
