import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferAuthorizationDecisionRationaleCodeSchema,
  type TransferAuthorizationDecisionRationaleCode,
} from "./transfer-authorization-decision-rationale-code.js";
import {
  transferAuthorizationDecisionSchema,
  type TransferAuthorizationDecision,
} from "./transfer-authorization-decision.js";
import {
  webhookEnvironmentValuesSchema,
  type WebhookEnvironmentValues,
} from "./webhook-environment-values.js";

/**
 * Fired when Plaid is unable to originate a new ACH transaction of the recurring transfer on the
 * planned date.
 */
export type RecurringTransferSkippedWebhook = {
  /** `TRANSFER` */
  webhookType: string;
  /** `RECURRING_TRANSFER_SKIPPED` */
  webhookCode: string;
  /** Plaid's unique identifier for a recurring transfer. */
  recurringTransferId: string;
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
  authorizationDecision: TransferAuthorizationDecision;
  /**
   * A code representing the rationale for approving or declining the proposed transfer.
   *
   * If the `rationale_code` is `null`, the transfer passed the authorization check.
   *
   * Any non-`null` value for an `approved` transfer indicates that the authorization check could
   * not be run and that you should perform your own risk assessment on the transfer. The code will
   * indicate why the check could not be run. Possible values for an `approved` transfer are:
   *
   * `MANUALLY_VERIFIED_ITEM` - Item created via a manual entry flow (i.e. Same-Day Micro-deposit,
   * Instant Micro-deposit, or database-based verification), limited information available.
   *
   * `ITEM_LOGIN_REQUIRED` - Unable to collect the account information due to Item staleness. Can be
   * resolved by using Link and setting
   * [`transfer.authorization_id`](https://plaid.com/docs/api/link/#link-token-create-request-transfer-authorization-id)
   * in the request to `/link/token/create`.
   *
   * `PAYMENT_PROFILE_LOGIN_REQUIRED` - The Payment Profile associated with the call to
   * `/transfer/authorization/create` is in a state that requires the end user to re-authenticate.
   * Can be resolved by using Link to refresh the Payment Profile.
   *
   * `MIGRATED_ACCOUNT_ITEM` - Item created via `/transfer/migrate_account` endpoint, limited
   * information available.
   *
   * `ERROR` - Unable to collect the account information due to an unspecified error.
   *
   * The following codes indicate that the authorization decision was `declined`:
   *
   * `NSF` - Transaction has an elevated probability of resulting in a return due to insufficient
   * funds.
   *
   * `RISK` - Transaction is high-risk.
   *
   * `TRANSFER_LIMIT_REACHED` - One or several transfer limits are reached, e.g. monthly transfer
   * limit. Check the accompanying `description` field to understand which limit has been reached.
   *
   * `ADMIN` - Transaction has an elevated probability of resulting in an administrative return (for
   * example a closed, invalid, or unauthorized account).
   *
   * `FRAUD` - Transaction has an elevated probability of being fraudulent.
   */
  authorizationDecisionRationaleCode?: TransferAuthorizationDecisionRationaleCode | null;
  /**
   * The planned date on which Plaid is unable to originate a new ACH transaction of the recurring
   * transfer. This will be of the form YYYY-MM-DD.
   */
  skippedOriginationDate: string;
  /** The Plaid environment the webhook was sent from */
  environment: WebhookEnvironmentValues;
};

export const recurringTransferSkippedWebhookSchema: Schema<RecurringTransferSkippedWebhook> =
  s.object<RecurringTransferSkippedWebhook>({
    webhookType: s.string(),
    webhookCode: s.string(),
    recurringTransferId: s.string(),
    authorizationDecision: transferAuthorizationDecisionSchema,
    authorizationDecisionRationaleCode: s.optionalNullable(
      s.lazy(() => transferAuthorizationDecisionRationaleCodeSchema),
    ),
    skippedOriginationDate: s.dateOnly(),
    environment: webhookEnvironmentValuesSchema,
    _keysMap: {
      webhookType: "webhook_type",
      webhookCode: "webhook_code",
      recurringTransferId: "recurring_transfer_id",
      authorizationDecision: "authorization_decision",
      authorizationDecisionRationaleCode: "authorization_decision_rationale_code",
      skippedOriginationDate: "skipped_origination_date",
    },
  });
