import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  recurringTransferNullableSchema,
  type RecurringTransferNullable,
} from "./recurring-transfer-nullable.js";
import {
  transferAuthorizationDecisionRationaleSchema,
  type TransferAuthorizationDecisionRationale,
} from "./transfer-authorization-decision-rationale.js";
import {
  transferAuthorizationDecisionSchema,
  type TransferAuthorizationDecision,
} from "./transfer-authorization-decision.js";

/** Defines the response schema for `/transfer/recurring/create` */
export type TransferRecurringCreateResponse = {
  /** Represents a recurring transfer within the Transfers API. */
  recurringTransfer?: RecurringTransferNullable | null;
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
  decisionRationale?: TransferAuthorizationDecisionRationale | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferRecurringCreateResponseSchema: Schema<TransferRecurringCreateResponse> =
  s.object<TransferRecurringCreateResponse>({
    recurringTransfer: s.optionalNullable(s.lazy(() => recurringTransferNullableSchema)),
    decision: transferAuthorizationDecisionSchema,
    decisionRationale: s.optionalNullable(s.lazy(() => transferAuthorizationDecisionRationaleSchema)),
    requestId: s.string(),
    _keysMap: {
      recurringTransfer: "recurring_transfer",
      decisionRationale: "decision_rationale",
      requestId: "request_id",
    },
  });
