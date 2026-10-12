import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authorizationGuaranteeDetailsSchema,
  type AuthorizationGuaranteeDetails,
} from "./authorization-guarantee-details.js";
import {
  transferAuthorizationDecisionRationaleSchema,
  type TransferAuthorizationDecisionRationale,
} from "./transfer-authorization-decision-rationale.js";
import {
  transferAuthorizationDecisionSchema,
  type TransferAuthorizationDecision,
} from "./transfer-authorization-decision.js";
import {
  transferAuthorizationGuaranteeDecisionRationaleSchema,
  type TransferAuthorizationGuaranteeDecisionRationale,
} from "./transfer-authorization-guarantee-decision-rationale.js";
import {
  transferAuthorizationGuaranteeDecisionSchema,
  type TransferAuthorizationGuaranteeDecision,
} from "./transfer-authorization-guarantee-decision.js";
import {
  transferAuthorizationPaymentRiskSchema,
  type TransferAuthorizationPaymentRisk,
} from "./transfer-authorization-payment-risk.js";
import {
  transferAuthorizationProposedTransferSchema,
  type TransferAuthorizationProposedTransfer,
} from "./transfer-authorization-proposed-transfer.js";

/** Contains the authorization decision for a proposed transfer. */
export type TransferAuthorization = {
  /** Plaid's unique identifier for a transfer authorization. */
  id: string;
  /**
   * The datetime representing when the authorization was created, in the format
   * `2006-01-02T15:04:05Z`.
   */
  created: Date;
  /**
   * A decision regarding the proposed transfer.
   *
   * `approved` - The proposed transfer has received the end user's consent and has been approved
   * for processing by Plaid. The `decision_rationale` field is set if Plaid was unable to fetch the
   * account information. You may proceed with the transfer, but further review is recommended.
   * Refer to the `code` field in the `decision_rationale` object for details.
   *
   * `declined` - Plaid reviewed the proposed transfer and declined processing. Refer to the `code`
   * field in the `decision_rationale` object for details.
   *
   * `user_action_required` - An action is required before Plaid can assess the transfer risk and
   * make a decision. The most common scenario is to update authentication for an Item. To complete
   * the required action, initialize Link by setting `transfer.authorization_id` in the request of
   * `/link/token/create`. After Link flow is completed, you may re-attempt the authorization
   * request.
   *
   * For `guarantee` requests, `approved` indicates the transfer is eligible for Plaid's guarantee,
   * and `declined` indicates Plaid will not provide guarantee coverage for the transfer.
   * `user_action_required` indicates you should follow the above guidance before re-attempting.
   */
  decision: TransferAuthorizationDecision;
  /**
   * The rationale for Plaid's decision regarding a proposed transfer. It is always set for
   * `declined` decisions, and may or may not be null for `approved` decisions.
   */
  decisionRationale: TransferAuthorizationDecisionRationale | null;
  /**
   * @deprecated
   */
  guaranteeDecision: TransferAuthorizationGuaranteeDecision | null;
  /**
   * The rationale for Plaid's decision to not guarantee a transfer. Will be `null` unless
   * `guarantee_decision` is `NOT_GUARANTEED`.
   *
   * @deprecated
   */
  guaranteeDecisionRationale: TransferAuthorizationGuaranteeDecisionRationale | null;
  /**
   * Adaptive guarantee details for a transfer authorization, including the guarantee outcome and
   * settlement schedule. Omitted when no guarantee was attempted.
   */
  guaranteeDetails?: AuthorizationGuaranteeDetails | null;
  /**
   * This object includes the scores and risk level. This response is offered as an add-on to
   * `/transfer/authorization/create`. To request access to these fields, please contact your Plaid
   * account manager.
   *
   * @deprecated
   */
  paymentRisk: TransferAuthorizationPaymentRisk | null;
  /** Details regarding the proposed transfer. */
  proposedTransfer: TransferAuthorizationProposedTransfer;
};

export const transferAuthorizationSchema: Schema<TransferAuthorization> = s.object<TransferAuthorization>({
  id: s.string(),
  created: s.dateTime(),
  decision: transferAuthorizationDecisionSchema,
  decisionRationale: s.nullable(s.lazy(() => transferAuthorizationDecisionRationaleSchema)),
  guaranteeDecision: s.nullable(s.lazy(() => transferAuthorizationGuaranteeDecisionSchema)),
  guaranteeDecisionRationale: s.nullable(s.lazy(() => transferAuthorizationGuaranteeDecisionRationaleSchema)),
  guaranteeDetails: s.optionalNullable(s.lazy(() => authorizationGuaranteeDetailsSchema)),
  paymentRisk: s.nullable(s.lazy(() => transferAuthorizationPaymentRiskSchema)),
  proposedTransfer: transferAuthorizationProposedTransferSchema,
  _keysMap: {
    decisionRationale: "decision_rationale",
    guaranteeDecision: "guarantee_decision",
    guaranteeDecisionRationale: "guarantee_decision_rationale",
    guaranteeDetails: "guarantee_details",
    paymentRisk: "payment_risk",
    proposedTransfer: "proposed_transfer",
  },
});
