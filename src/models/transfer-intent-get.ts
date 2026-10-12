import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import {
  transferAuthorizationDecisionRationaleSchema,
  type TransferAuthorizationDecisionRationale,
} from "./transfer-authorization-decision-rationale.js";
import {
  transferAuthorizationGuaranteeDecisionRationaleSchema,
  type TransferAuthorizationGuaranteeDecisionRationale,
} from "./transfer-authorization-guarantee-decision-rationale.js";
import {
  transferAuthorizationGuaranteeDecisionSchema,
  type TransferAuthorizationGuaranteeDecision,
} from "./transfer-authorization-guarantee-decision.js";
import {
  transferIntentAuthorizationDecisionSchema,
  type TransferIntentAuthorizationDecision,
} from "./transfer-intent-authorization-decision.js";
import {
  transferIntentCreateModeSchema,
  type TransferIntentCreateMode,
} from "./transfer-intent-create-mode.js";
import {
  TransferIntentCreateNetwork,
  transferIntentCreateNetworkSchema,
} from "./transfer-intent-create-network.js";
import {
  transferIntentGetFailureReasonSchema,
  type TransferIntentGetFailureReason,
} from "./transfer-intent-get-failure-reason.js";
import { transferIntentStatusSchema, type TransferIntentStatus } from "./transfer-intent-status.js";
import { transferUserInResponseSchema, type TransferUserInResponse } from "./transfer-user-in-response.js";

/** Represents a transfer intent within Transfer UI. */
export type TransferIntentGet = {
  /** Plaid's unique identifier for a transfer intent object. */
  id: string;
  /** The datetime the transfer was created. This will be of the form `2006-01-02T15:04:05Z`. */
  created: Date;
  /**
   * The status of the transfer intent.
   *
   * `PENDING`: The transfer intent is pending. `SUCCEEDED`: The transfer intent was successfully
   * created. `FAILED`: The transfer intent was unable to be created.
   */
  status: TransferIntentStatus;
  /**
   * Plaid's unique identifier for the transfer created through the UI. Returned only if the
   * transfer was successfully created. Null value otherwise.
   */
  transferId: string | null;
  /**
   * The reason for a failed transfer intent. Returned only if the transfer intent status is
   * `failed`. Null otherwise.
   */
  failureReason: TransferIntentGetFailureReason | null;
  /**
   * A decision regarding the proposed transfer.
   *
   * `APPROVED` - The proposed transfer has received the end user's consent and has been approved
   * for processing by Plaid. The `decision_rationale` field is set if Plaid was unable to fetch the
   * account information. You may proceed with the transfer, but further review is recommended
   * (i.e., use Link in update mode to re-authenticate your user when `decision_rationale.code` is
   * `ITEM_LOGIN_REQUIRED`). Refer to the `code` field in the `decision_rationale` object for
   * details.
   *
   * `DECLINED` - Plaid reviewed the proposed transfer and declined processing. Refer to the `code`
   * field in the `decision_rationale` object for details.
   */
  authorizationDecision: TransferIntentAuthorizationDecision | null;
  /**
   * The rationale for Plaid's decision regarding a proposed transfer. It is always set for
   * `declined` decisions, and may or may not be null for `approved` decisions.
   */
  authorizationDecisionRationale: TransferAuthorizationDecisionRationale | null;
  /**
   * The Plaid `account_id` for the account that will be debited or credited. Returned only if
   * `account_id` was set on intent creation.
   */
  accountId?: string | null;
  /**
   * Plaid's unique identifier for the origination account used for the transfer.
   *
   * @deprecated
   */
  originationAccountId: string;
  /**
   * The id of the funding account to use, available in the Plaid Dashboard. This determines which
   * of your business checking accounts will be credited or debited.
   */
  fundingAccountId: string;
  /**
   * The amount of the transfer (decimal string with two digits of precision e.g. "10.00"). When
   * calling `/transfer/authorization/create`, specify the maximum amount to authorize. When calling
   * `/transfer/create`, specify the exact amount of the transfer, up to a maximum of the amount
   * authorized. If this field is left blank when calling `/transfer/create`, the maximum amount
   * authorized in the `authorization_id` will be sent.
   */
  amount: string;
  /**
   * The direction of the flow of transfer funds.
   *
   * `PAYMENT`: Transfers funds from an end user's account to your business account.
   *
   * `DISBURSEMENT`: Transfers funds from your business account to an end user's account.
   */
  mode: TransferIntentCreateMode;
  /**
   * The network or rails used for the transfer. Defaults to `same-day-ach`.
   *
   * For transfers submitted using `ach`, the Standard ACH cutoff is 8:30 PM Eastern Time.
   *
   * For transfers submitted using `same-day-ach`, the Same Day ACH cutoff is 3:00 PM Eastern Time.
   * It is recommended to send the request 15 minutes prior to the cutoff to ensure that it will be
   * processed in time for submission before the cutoff. If the transfer is processed after this
   * cutoff but before the Standard ACH cutoff, it will be sent over Standard ACH rails and will not
   * incur same-day charges.
   *
   * For transfers submitted using `rtp`, in the case that the account being credited does not
   * support RTP, the transfer will be sent over ACH as long as an `ach_class` is provided in the
   * request. If RTP isn't supported by the account and no `ach_class` is provided, the transfer
   * will fail to be submitted.
   *
   * @default TransferIntentCreateNetwork.SameDayAch
   */
  network?: TransferIntentCreateNetwork;
  /**
   * Specifies the use case of the transfer. Required for transfers on an ACH network. For more
   * details, see [ACH SEC
   * codes](https://plaid.com/docs/transfer/creating-transfers/#ach-sec-codes).
   *
   * Codes supported for credits: `ccd`, `ppd` Codes supported for debits: `ccd`, `ppd`, `tel`,
   * `web`
   *
   * `"ccd"` - Corporate Credit or Debit - fund transfer between two corporate bank accounts
   *
   * `"ppd"` - Prearranged Payment or Deposit - The transfer is part of a pre-existing relationship
   * with a consumer. Authorization was obtained in writing either in person or via an electronic
   * document signing, e.g. Docusign, by the consumer. Can be used for credits or debits.
   *
   * `"web"` - Internet-Initiated Entry. The transfer debits a consumer's bank account.
   * Authorization from the consumer is obtained over the Internet (e.g. a web or mobile
   * application). Can be used for single debits or recurring debits.
   *
   * `"tel"` - Telephone-Initiated Entry. The transfer debits a consumer. Debit authorization has
   * been received orally over the telephone via a recorded call.
   */
  achClass?: AchClass;
  /** The legal name and other information for the account holder. */
  user: TransferUserInResponse;
  /** A description for the underlying transfer. Maximum of 15 characters. */
  description: string;
  /**
   * The Metadata object is a mapping of client-provided string fields to any string value. The
   * following limitations apply: The JSON values must be Strings (no nested JSON objects allowed)
   * Only ASCII characters may be used Maximum of 50 key/value pairs Maximum key length of 40
   * characters Maximum value length of 500 characters
   */
  metadata?: Record<string, string> | null;
  /** The currency of the transfer amount, e.g. "USD" */
  isoCurrencyCode: string;
  /**
   * When `true`, the transfer requires a `GUARANTEED` decision by Plaid to proceed (Guarantee
   * customers only).
   */
  requireGuarantee?: boolean | null;
  /**
   * Indicates whether the transfer is guaranteed by Plaid (Guarantee customers only). This field
   * will contain either `GUARANTEED` or `NOT_GUARANTEED` indicating whether Plaid will guarantee
   * the transfer.
   *
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
};

export const transferIntentGetSchema: Schema<TransferIntentGet> = s.object<TransferIntentGet>({
  id: s.string(),
  created: s.dateTime(),
  status: transferIntentStatusSchema,
  transferId: s.nullable(s.string()),
  failureReason: s.nullable(s.lazy(() => transferIntentGetFailureReasonSchema)),
  authorizationDecision: s.nullable(s.lazy(() => transferIntentAuthorizationDecisionSchema)),
  authorizationDecisionRationale: s.nullable(s.lazy(() => transferAuthorizationDecisionRationaleSchema)),
  accountId: s.optionalNullable(s.string()),
  originationAccountId: s.string(),
  fundingAccountId: s.string(),
  amount: s.string(),
  mode: transferIntentCreateModeSchema,
  network: s.defaulted(transferIntentCreateNetworkSchema, TransferIntentCreateNetwork.SameDayAch),
  achClass: s.optional(s.lazy(() => achClassSchema)),
  user: transferUserInResponseSchema,
  description: s.string(),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  isoCurrencyCode: s.string(),
  requireGuarantee: s.optionalNullable(s.boolean()),
  guaranteeDecision: s.nullable(s.lazy(() => transferAuthorizationGuaranteeDecisionSchema)),
  guaranteeDecisionRationale: s.nullable(s.lazy(() => transferAuthorizationGuaranteeDecisionRationaleSchema)),
  _keysMap: {
    transferId: "transfer_id",
    failureReason: "failure_reason",
    authorizationDecision: "authorization_decision",
    authorizationDecisionRationale: "authorization_decision_rationale",
    accountId: "account_id",
    originationAccountId: "origination_account_id",
    fundingAccountId: "funding_account_id",
    achClass: "ach_class",
    isoCurrencyCode: "iso_currency_code",
    requireGuarantee: "require_guarantee",
    guaranteeDecision: "guarantee_decision",
    guaranteeDecisionRationale: "guarantee_decision_rationale",
  },
});
