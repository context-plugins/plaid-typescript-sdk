import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achClassSchema, type AchClass } from "./ach-class.js";
import {
  originatorExpectedTransferFrequencySchema,
  type OriginatorExpectedTransferFrequency,
} from "./originator-expected-transfer-frequency.js";

export type TransferDebitUsageConfiguration = {
  expectedFrequency: OriginatorExpectedTransferFrequency;
  expectedHighestAmount: string;
  expectedAverageAmount: string;
  expectedMonthlyAmount: string;
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
