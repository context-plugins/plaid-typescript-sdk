import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditAchClassSchema, type CreditAchClass } from "./credit-ach-class.js";
import {
  originatorExpectedTransferFrequencySchema,
  type OriginatorExpectedTransferFrequency,
} from "./originator-expected-transfer-frequency.js";

/**
 * Specifies the originator's expected usage of credits. For all dollar amounts, use a decimal
 * string with two digits of precision e.g. "10.00". This field is required if the originator is
 * expected to process credit transfers.
 */
export type TransferCreditUsageConfiguration = {
  /** The originator's expected transfer frequency. */
  expectedFrequency: OriginatorExpectedTransferFrequency;
  /** The originator's expected highest amount for a single credit transfer. */
  expectedHighestAmount: string;
  /** The originator's expected average amount per credit. */
  expectedAverageAmount: string;
  /** The originator's monthly expected ACH credit processing amount for the next 6-12 months. */
  expectedMonthlyAmount: string;
  /**
   * Specifies the expected use cases for the originator's credit transfers. This should be a list
   * that contains one or more of the following codes:
   *
   * `"ccd"` - Corporate Credit or Debit - fund transfer between two corporate bank accounts
   *
   * `"ppd"` - Prearranged Payment or Deposit. The transfer is part of a pre-existing relationship
   * with a consumer. Authorization was obtained from the consumer in person via writing, or through
   * online authorization, or via an electronic document signing, e.g. Docusign. For example
   * language for online authorization, see the 2025 Nacha Operating Rules -- Section 2.3.2,
   * Authorization of Entries via Electronic Means. Can be used for credits or debits.
   *
   * `"web"` - Internet-Initiated Entry. The transfer debits a consumer's bank account.
   * Authorization from the consumer is obtained over the Internet (e.g. a web or mobile
   * application). Can be used for single debits or recurring debits.
   */
  secCodes: CreditAchClass[];
};

export const transferCreditUsageConfigurationSchema: Schema<TransferCreditUsageConfiguration> =
  s.object<TransferCreditUsageConfiguration>({
    expectedFrequency: originatorExpectedTransferFrequencySchema,
    expectedHighestAmount: s.string(),
    expectedAverageAmount: s.string(),
    expectedMonthlyAmount: s.string(),
    secCodes: s.array(s.lazy(() => creditAchClassSchema)),
    _keysMap: {
      expectedFrequency: "expected_frequency",
      expectedHighestAmount: "expected_highest_amount",
      expectedAverageAmount: "expected_average_amount",
      expectedMonthlyAmount: "expected_monthly_amount",
      secCodes: "sec_codes",
    },
  });
