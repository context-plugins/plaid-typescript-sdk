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

/**
 * BeaconAccountRiskEvaluateRequest defines the request schema for
 * `/beacon/account_risk/v1/evaluate`
 */
export type BeaconAccountRiskEvaluateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The access token associated with the Item for which data is being requested. */
  accessToken?: string;
  /**
   * An optional object to filter `/beacon/account_risk/v1/evaluate` results to a subset of the
   * accounts on the linked Item.
   */
  options?: BeaconAccountRiskEvaluateRequestOptions;
  /**
   * A unique ID that identifies the end user in your system. This ID is used to correlate requests
   * by a user with multiple evaluations and/or multiple linked accounts. Personally identifiable
   * information, such as an email address or phone number, should not be used in the
   * `client_user_id`.
   */
  clientUserId?: string;
  /**
   * Unique identifier of what you are looking to evaluate (account add, information change, etc.)
   * to allow us to tie the activity to the decisions and possible fraud outcome sent via our
   * feedback endpoints. You can use your internal request ID or similar.
   */
  clientEvaluationId?: string;
  /**
   * Description of the reason you want to evaluate risk. `ONBOARDING`: user links a first bank
   * account as part of the onboarding flow of your platform. `NEW_ACCOUNT`: user links another bank
   * account or replaces the currently linked bank account on your platform. `INFORMATION_CHANGE`:
   * user changes their information on your platform, e.g., updating their phone number.
   * `DORMANT_USER`: you decide to re-evaluate a user that becomes active after a period of
   * inactivity. `OTHER`: any other reasons not listed here Possible values: `ONBOARDING`,
   * `NEW_ACCOUNT`, `INFORMATION_CHANGE`, `DORMANT_USER`, `OTHER`
   */
  evaluationReason?: BeaconAccountRiskEvaluateEvaluationReason;
  /**
   * Details about the end user's device. These fields are optional, but strongly recommended to
   * increase the accuracy of results when using Signal Transaction Scores. When using a
   * Balance-only Ruleset, these fields are ignored if the Signal Addendum has been signed; if it
   * has not been signed, using these fields will result in an error.
   */
  device?: SignalEvaluateDevice;
  /**
   * The time the event for evaluation has occurred. Populate this field for backfilling data. If
   * you don't populate this field, we'll use the timestamp at the time of receipt. Use ISO 8601
   * format (YYYY-MM-DDTHH:mm:ssZ).
   */
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
