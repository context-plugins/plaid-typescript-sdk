import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craBankIncomeIncomeProviderSchema,
  type CraBankIncomeIncomeProvider,
} from "./cra-bank-income-income-provider.js";
import { craBankIncomeStatusSchema, type CraBankIncomeStatus } from "./cra-bank-income-status.js";
import { craIncomeCategorySchema, type CraIncomeCategory } from "./cra-income-category.js";
import { craIncomeNextPaymentSchema, type CraIncomeNextPayment } from "./cra-income-next-payment.js";
import {
  creditBankIncomePayFrequencySchema,
  type CreditBankIncomePayFrequency,
} from "./credit-bank-income-pay-frequency.js";

export type CraIncomeStreamInsights = {
  incomeCategory: CraIncomeCategory;
  payFrequency: CreditBankIncomePayFrequency;
  incomeProvider: CraBankIncomeIncomeProvider | null;
  status: CraBankIncomeStatus;
  nextPayment: CraIncomeNextPayment | null;
};

export const craIncomeStreamInsightsSchema: Schema<CraIncomeStreamInsights> =
  s.object<CraIncomeStreamInsights>({
    incomeCategory: craIncomeCategorySchema,
    payFrequency: creditBankIncomePayFrequencySchema,
    incomeProvider: s.nullable(s.lazy(() => craBankIncomeIncomeProviderSchema)),
    status: craBankIncomeStatusSchema,
    nextPayment: s.nullable(s.lazy(() => craIncomeNextPaymentSchema)),
    _keysMap: {
      incomeCategory: "income_category",
      payFrequency: "pay_frequency",
      incomeProvider: "income_provider",
      nextPayment: "next_payment",
    },
  });
