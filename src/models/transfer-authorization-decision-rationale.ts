import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferAuthorizationDecisionRationaleCodeSchema,
  type TransferAuthorizationDecisionRationaleCode,
} from "./transfer-authorization-decision-rationale-code.js";

/**
 * The rationale for Plaid's decision regarding a proposed transfer. It is always set for `declined`
 * decisions, and may or may not be null for `approved` decisions.
 */
export type TransferAuthorizationDecisionRationale = {
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
  code: TransferAuthorizationDecisionRationaleCode | null;
  /**
   * A human-readable description of the code associated with a transfer approval or transfer
   * decline.
   */
  description: string;
};

export const transferAuthorizationDecisionRationaleSchema: Schema<TransferAuthorizationDecisionRationale> =
  s.object<TransferAuthorizationDecisionRationale>({
    code: s.nullable(s.lazy(() => transferAuthorizationDecisionRationaleCodeSchema)),
    description: s.string(),
  });
