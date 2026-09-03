import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditAchClassSchema, type CreditAchClass } from "./credit-ach-class.js";
import {
  originatorExpectedTransferFrequencySchema,
  type OriginatorExpectedTransferFrequency,
} from "./originator-expected-transfer-frequency.js";

export type TransferCreditUsageConfiguration = {
  expectedFrequency: OriginatorExpectedTransferFrequency;
  expectedHighestAmount: string;
  expectedAverageAmount: string;
  expectedMonthlyAmount: string;
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
