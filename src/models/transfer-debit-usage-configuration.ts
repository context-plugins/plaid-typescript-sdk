import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import {
  originatorExpectedTransferFrequencySchema,
  type OriginatorExpectedTransferFrequency,
} from "./originator-expected-transfer-frequency.js";

/**
 * Specifies the originator's expected usage of debits. For all dollar amounts, use a decimal string
 * with two digits of precision e.g. "10.00". This field is required if the originator is expected
 * to process debit transfers.
 */
export type TransferDebitUsageConfiguration = {
  /** The originator's expected transfer frequency. */
  expectedFrequency: OriginatorExpectedTransferFrequency;
  /** The originator's expected highest amount for a single debit transfer. */
  expectedHighestAmount: string;
  /** The originator's expected average amount per debit. */
  expectedAverageAmount: string;
  /** The originator's monthly expected ACH debit processing amount for the next 6-12 months. */
  expectedMonthlyAmount: string;
  /**
   * Specifies the expected use cases for the originator's debit transfers. This should be a list
   * that contains one or more of the following codes:
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
  secCodes: AchClass[];
};

export const transferDebitUsageConfigurationSchema: Schema<TransferDebitUsageConfiguration> =
  s.object<TransferDebitUsageConfiguration>({
    expectedFrequency: originatorExpectedTransferFrequencySchema,
    expectedHighestAmount: s.string(),
    expectedAverageAmount: s.string(),
    expectedMonthlyAmount: s.string(),
    secCodes: s.array(s.lazy(() => achClassSchema)),
    _keysMap: {
      expectedFrequency: "expected_frequency",
      expectedHighestAmount: "expected_highest_amount",
      expectedAverageAmount: "expected_average_amount",
      expectedMonthlyAmount: "expected_monthly_amount",
      secCodes: "sec_codes",
    },
  });
