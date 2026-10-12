import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  financialInstitutionInsightsSchema,
  type FinancialInstitutionInsights,
} from "./financial-institution-insights.js";
import { merchantInsightsSchema, type MerchantInsights } from "./merchant-insights.js";

/** Insights around a user's counterparties */
export type CounterpartyInsights = {
  /**
   * Insights related to a user's transactions with other financial institutions, including detected
   * account types.
   */
  financialInstitutionInsights?: FinancialInstitutionInsights[];
  /** Insights about a user's top merchants, ranked by spend. */
  merchantInsights?: MerchantInsights[];
};

export const counterpartyInsightsSchema: Schema<CounterpartyInsights> = s.object<CounterpartyInsights>({
  financialInstitutionInsights: s.optional(s.array(s.lazy(() => financialInstitutionInsightsSchema))),
  merchantInsights: s.optional(s.array(s.lazy(() => merchantInsightsSchema))),
  _keysMap: {
    financialInstitutionInsights: "financial_institution_insights",
    merchantInsights: "merchant_insights",
  },
});
