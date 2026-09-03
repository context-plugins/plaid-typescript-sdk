import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  beaconAccountRiskEvaluateAccountSchema,
  type BeaconAccountRiskEvaluateAccount,
} from "./beacon-account-risk-evaluate-account.js";

export type BeaconAccountRiskEvaluateResponse = {
  requestId: string;
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
