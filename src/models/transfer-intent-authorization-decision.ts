import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A decision regarding the proposed transfer.
 *
 * `APPROVED` - The proposed transfer has received the end user's consent and has been approved for
 * processing by Plaid. The `decision_rationale` field is set if Plaid was unable to fetch the
 * account information. You may proceed with the transfer, but further review is recommended (i.e.,
 * use Link in update mode to re-authenticate your user when `decision_rationale.code` is
 * `ITEM_LOGIN_REQUIRED`). Refer to the `code` field in the `decision_rationale` object for details.
 *
 * `DECLINED` - Plaid reviewed the proposed transfer and declined processing. Refer to the `code`
 * field in the `decision_rationale` object for details.
 */
export const TransferIntentAuthorizationDecision = {
  Approved: "APPROVED",
  Declined: "DECLINED",
} as const;
export type TransferIntentAuthorizationDecision =
  | (typeof TransferIntentAuthorizationDecision)[keyof typeof TransferIntentAuthorizationDecision]
  | (string & {});

export const transferIntentAuthorizationDecisionSchema: EnumSchema<TransferIntentAuthorizationDecision> =
  s.enumOf<TransferIntentAuthorizationDecision>(TransferIntentAuthorizationDecision);
