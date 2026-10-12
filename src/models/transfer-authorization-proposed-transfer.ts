import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import {
  transferCreditFundsSourceSchema,
  type TransferCreditFundsSource,
} from "./transfer-credit-funds-source.js";
import { transferTypeSchema, type TransferType } from "./transfer-type.js";
import { transferUserInResponseSchema, type TransferUserInResponse } from "./transfer-user-in-response.js";
import { transferWireDetailsSchema, type TransferWireDetails } from "./transfer-wire-details.js";

/** Details regarding the proposed transfer. */
export type TransferAuthorizationProposedTransfer = {
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
  /** The Plaid `account_id` for the account that will be debited or credited. */
  accountId?: string;
  /**
   * The id of the associated funding account, available in the Plaid Dashboard. If present, this
   * indicates which of your business checking accounts will be credited or debited.
   */
  fundingAccountId: string | null;
  /** Plaid's unique identifier for a Plaid Ledger Balance. */
  ledgerId?: string | null;
  /**
   * The type of transfer. This will be either `debit` or `credit`. A `debit` indicates a transfer
   * of money into the origination account; a `credit` indicates a transfer of money out of the
   * origination account.
   */
  type: TransferType;
  /** The legal name and other information for the account holder. */
  user: TransferUserInResponse;
  /**
   * The amount of the transfer (decimal string with two digits of precision e.g. "10.00"). When
   * calling `/transfer/authorization/create`, specify the maximum amount to authorize. When calling
   * `/transfer/create`, specify the exact amount of the transfer, up to a maximum of the amount
   * authorized. If this field is left blank when calling `/transfer/create`, the maximum amount
   * authorized in the `authorization_id` will be sent.
   */
  amount: string;
  /**
   * The amount originally requested by the client when creating the authorization (decimal string
   * with two digits of precision e.g. "800.00"). This may differ from `amount`, the amount Plaid
   * proposes to transfer, when only a partial amount is offered as part of an Adaptive Guarantee.
   */
  requestedAmount: string;
  /** The network or rails used for the transfer. */
  network: string;
  /** Information specific to wire transfers. */
  wireDetails?: TransferWireDetails | null;
  /**
   * Plaid's unique identifier for the origination account that was used for this transfer.
   *
   * @deprecated
   */
  originationAccountId: string;
  /** The currency of the transfer amount. The default value is "USD". */
  isoCurrencyCode: string;
  /**
   * The Plaid client ID that is the originator of this transfer. Only present if created on behalf
   * of another client as a [Platform
   * customer](https://plaid.com/docs/transfer/application/#originators-vs-platforms).
   */
  originatorClientId: string | null;
  /**
   * @deprecated
   */
  creditFundsSource: TransferCreditFundsSource | null;
};

export const transferAuthorizationProposedTransferSchema: Schema<TransferAuthorizationProposedTransfer> =
  s.object<TransferAuthorizationProposedTransfer>({
    achClass: s.optional(s.lazy(() => achClassSchema)),
    accountId: s.optional(s.string()),
    fundingAccountId: s.nullable(s.string()),
    ledgerId: s.optionalNullable(s.string()),
    type: transferTypeSchema,
    user: transferUserInResponseSchema,
    amount: s.string(),
    requestedAmount: s.string(),
    network: s.string(),
    wireDetails: s.optionalNullable(s.lazy(() => transferWireDetailsSchema)),
    originationAccountId: s.string(),
    isoCurrencyCode: s.string(),
    originatorClientId: s.nullable(s.string()),
    creditFundsSource: s.nullable(s.lazy(() => transferCreditFundsSourceSchema)),
    _keysMap: {
      achClass: "ach_class",
      accountId: "account_id",
      fundingAccountId: "funding_account_id",
      ledgerId: "ledger_id",
      requestedAmount: "requested_amount",
      wireDetails: "wire_details",
      originationAccountId: "origination_account_id",
      isoCurrencyCode: "iso_currency_code",
      originatorClientId: "originator_client_id",
      creditFundsSource: "credit_funds_source",
    },
  });
