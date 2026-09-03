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

export type TransferOriginatorDiligence = {
  dba: string;
  taxId: string;
  creditUsageConfiguration?: TransferCreditUsageConfiguration | null;
  debitUsageConfiguration?: TransferDebitUsageConfiguration | null;
  address: TransferOriginatorAddress;
  website: string;
  naicsCode: string;
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
