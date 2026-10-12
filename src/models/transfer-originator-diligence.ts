import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferCreditUsageConfigurationSchema,
  type TransferCreditUsageConfiguration,
} from "./transfer-credit-usage-configuration.js";
import {
  transferDebitUsageConfigurationSchema,
  type TransferDebitUsageConfiguration,
} from "./transfer-debit-usage-configuration.js";
import { transferFundingAccountSchema, type TransferFundingAccount } from "./transfer-funding-account.js";
import {
  transferOriginatorAddressSchema,
  type TransferOriginatorAddress,
} from "./transfer-originator-address.js";

/** The diligence information for the originator. */
export type TransferOriginatorDiligence = {
  /** The business name of the originator. */
  dba: string;
  /** The tax ID of the originator. */
  taxId: string;
  /**
   * Specifies the originator's expected usage of credits. For all dollar amounts, use a decimal
   * string with two digits of precision e.g. "10.00". This field is required if the originator is
   * expected to process credit transfers.
   */
  creditUsageConfiguration?: TransferCreditUsageConfiguration | null;
  /**
   * Specifies the originator's expected usage of debits. For all dollar amounts, use a decimal
   * string with two digits of precision e.g. "10.00". This field is required if the originator is
   * expected to process debit transfers.
   */
  debitUsageConfiguration?: TransferDebitUsageConfiguration | null;
  /** The originator's address. */
  address: TransferOriginatorAddress;
  /** The website of the originator. */
  website: string;
  /** The NAICS code of the originator. */
  naicsCode: string;
  /** The originator's funding account, linked with Plaid Link or `/transfer/migrate_account`. */
  fundingAccount: TransferFundingAccount;
};

export const transferOriginatorDiligenceSchema: Schema<TransferOriginatorDiligence> =
  s.object<TransferOriginatorDiligence>({
    dba: s.string(),
    taxId: s.string(),
    creditUsageConfiguration: s.optionalNullable(s.lazy(() => transferCreditUsageConfigurationSchema)),
    debitUsageConfiguration: s.optionalNullable(s.lazy(() => transferDebitUsageConfigurationSchema)),
    address: transferOriginatorAddressSchema,
    website: s.string(),
    naicsCode: s.string(),
    fundingAccount: transferFundingAccountSchema,
    _keysMap: {
      taxId: "tax_id",
      creditUsageConfiguration: "credit_usage_configuration",
      debitUsageConfiguration: "debit_usage_configuration",
      naicsCode: "naics_code",
      fundingAccount: "funding_account",
    },
  });
