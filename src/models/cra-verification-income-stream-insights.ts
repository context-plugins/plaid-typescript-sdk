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

/** Modeled insights for a given income stream. */
export type CraVerificationIncomeStreamInsights = {
  /**
   * The income category for a given stream. The streams returned in the response will be filtered
   * based on these primary and secondary income categories.
   *
   * See the [Income V2 Category
   * Taxonomy](https://plaid.com/documents/income-v2-category-taxonomy.csv) for a full list of
   * income categories.
   */
  incomeCategory: CraVerificationIncomeCategory;
  /**
   * The income pay frequency. `WEEKLY`: Weekly pay frequency. `BIWEEKLY`: Biweekly pay frequency.
   * `SEMI_MONTHLY`: Semi-monthly pay frequency. `MONTHLY`: Monthly pay frequency. `DAILY`: Daily
   * pay frequency. `UNKNOWN`: Pay frequency is unknown.
   */
  payFrequency: CraVerificationIncomePayFrequency;
  /** The object containing data about the income provider. */
  incomeProvider: CraVerificationIncomeProvider | null;
  /**
   * The status of the income source. `ACTIVE`: The income source is active. `INACTIVE`: The income
   * source is inactive. `UNKNOWN`: The income source status is unknown.
   */
  status: CraVerificationIncomeStatus;
  /** Metadata of the income stream's next payment. */
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
