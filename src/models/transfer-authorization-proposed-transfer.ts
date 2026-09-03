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

export type TransferAuthorizationProposedTransfer = {
  achClass?: AchClass;
  accountId?: string;
  fundingAccountId: string | null;
  ledgerId?: string | null;
  type: TransferType;
  user: TransferUserInResponse;
  amount: string;
  requestedAmount: string;
  network: string;
  wireDetails?: TransferWireDetails | null;
  originationAccountId: string;
  isoCurrencyCode: string;
  originatorClientId: string | null;
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
