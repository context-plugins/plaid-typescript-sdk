import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An optional object to filter `/beacon/account_risk/v1/evaluate` results to a subset of the
 * accounts on the linked Item.
 */
export type BeaconAccountRiskEvaluateRequestOptions = {
  /** An array of `account_ids` for the specific accounts to evaluate. */
  accountIds?: string[];
};

export const beaconAccountRiskEvaluateRequestOptionsSchema: Schema<BeaconAccountRiskEvaluateRequestOptions> =
  s.object<BeaconAccountRiskEvaluateRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
