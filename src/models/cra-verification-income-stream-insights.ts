import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationIncomeCategorySchema,
  type CraVerificationIncomeCategory,
} from "./cra-verification-income-category.js";
import {
  craVerificationIncomeNextPaymentSchema,
  type CraVerificationIncomeNextPayment,
} from "./cra-verification-income-next-payment.js";
import {
  craVerificationIncomePayFrequencySchema,
  type CraVerificationIncomePayFrequency,
} from "./cra-verification-income-pay-frequency.js";
import {
  craVerificationIncomeProviderSchema,
  type CraVerificationIncomeProvider,
} from "./cra-verification-income-provider.js";
import {
  craVerificationIncomeStatusSchema,
  type CraVerificationIncomeStatus,
} from "./cra-verification-income-status.js";

export type CraVerificationIncomeStreamInsights = {
  incomeCategory: CraVerificationIncomeCategory;
  payFrequency: CraVerificationIncomePayFrequency;
  incomeProvider: CraVerificationIncomeProvider | null;
  status: CraVerificationIncomeStatus;
  nextPayment: CraVerificationIncomeNextPayment | null;
};

export const craVerificationIncomeStreamInsightsSchema: Schema<CraVerificationIncomeStreamInsights> =
  s.object<CraVerificationIncomeStreamInsights>({
    incomeCategory: craVerificationIncomeCategorySchema,
    payFrequency: craVerificationIncomePayFrequencySchema,
    incomeProvider: s.nullable(s.lazy(() => craVerificationIncomeProviderSchema)),
    status: craVerificationIncomeStatusSchema,
    nextPayment: s.nullable(s.lazy(() => craVerificationIncomeNextPaymentSchema)),
    _keysMap: {
      incomeCategory: "income_category",
      payFrequency: "pay_frequency",
      incomeProvider: "income_provider",
      nextPayment: "next_payment",
    },
  });
