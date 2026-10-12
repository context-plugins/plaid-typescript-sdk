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

/** Modeled insights for a given income stream. */
export type CraIncomeStreamInsights = {
  /**
   * The income category for a given stream. The streams returned in the response will be filtered
   * based on these primary and secondary income categories.
   *
   * See the [Income V2 Category
   * Taxonomy](https://plaid.com/documents/income-v2-category-taxonomy.csv) for a full list of
   * income categories.
   */
  incomeCategory: CraIncomeCategory;
  /** The income pay frequency. */
  payFrequency: CreditBankIncomePayFrequency;
  /** The object containing data about the income provider. */
  incomeProvider: CraBankIncomeIncomeProvider | null;
  /**
   * The status of the income sources. `ACTIVE`: The income source is active. `INACTIVE`: The income
   * source is inactive. `UNKNOWN`: The income source status is unknown.
   */
  status: CraBankIncomeStatus;
  /** Metadata of the income stream's next payment. */
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
