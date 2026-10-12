import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  beaconAccountRiskEvaluateAccountSchema,
  type BeaconAccountRiskEvaluateAccount,
} from "./beacon-account-risk-evaluate-account.js";

/**
 * BeaconAccountRiskEvaluateResponse defines the response schema for
 * `/beacon/account_risk/v1/evaluate`
 */
export type BeaconAccountRiskEvaluateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** The accounts for which a risk evaluation has been requested. */
  accounts: BeaconAccountRiskEvaluateAccount[];
};

export const beaconAccountRiskEvaluateResponseSchema: Schema<BeaconAccountRiskEvaluateResponse> =
  s.object<BeaconAccountRiskEvaluateResponse>({
    requestId: s.string(),
    accounts: s.array(s.lazy(() => beaconAccountRiskEvaluateAccountSchema)),
    _keysMap: {
      requestId: "request_id",
    },
  });
