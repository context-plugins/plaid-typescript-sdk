import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  beaconAccountRiskEvaluateEvaluationReasonSchema,
  type BeaconAccountRiskEvaluateEvaluationReason,
} from "./beacon-account-risk-evaluate-evaluation-reason.js";
import {
  beaconAccountRiskEvaluateRequestOptionsSchema,
  type BeaconAccountRiskEvaluateRequestOptions,
} from "./beacon-account-risk-evaluate-request-options.js";
import { signalEvaluateDeviceSchema, type SignalEvaluateDevice } from "./signal-evaluate-device.js";

export type BeaconAccountRiskEvaluateRequest = {
  clientId?: string;
  secret?: string;
  accessToken?: string;
  options?: BeaconAccountRiskEvaluateRequestOptions;
  clientUserId?: string;
  clientEvaluationId?: string;
  evaluationReason?: BeaconAccountRiskEvaluateEvaluationReason;
  device?: SignalEvaluateDevice;
  evaluateTime?: string;
};

export const beaconAccountRiskEvaluateRequestSchema: Schema<BeaconAccountRiskEvaluateRequest> =
  s.object<BeaconAccountRiskEvaluateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessToken: s.optional(s.string()),
    options: s.optional(s.lazy(() => beaconAccountRiskEvaluateRequestOptionsSchema)),
    clientUserId: s.optional(s.string()),
    clientEvaluationId: s.optional(s.string()),
    evaluationReason: s.optional(s.lazy(() => beaconAccountRiskEvaluateEvaluationReasonSchema)),
    device: s.optional(s.lazy(() => signalEvaluateDeviceSchema)),
    evaluateTime: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      clientUserId: "client_user_id",
      clientEvaluationId: "client_evaluation_id",
      evaluationReason: "evaluation_reason",
      evaluateTime: "evaluate_time",
    },
  });
