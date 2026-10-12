import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { affordabilityInsightsSchema, type AffordabilityInsights } from "./affordability-insights.js";
import { riskIndicatorsSchema, type RiskIndicators } from "./risk-indicators.js";

/**
 * This is a container object for all lending-related insights. This field will be returned only for
 * European customers.
 */
export type AccountInsights = {
  /**
   * Risk indicators focus on providing signal on the possibility of a borrower defaulting on their
   * loan repayments by providing data points related to its payment behavior, debt, and other
   * relevant financial information, helping lenders gauge the level of risk involved in a certain
   * operation.
   */
  risk?: RiskIndicators | null;
  /**
   * Affordability insights focus on providing signal on the ability of a borrower to repay their
   * loan without experiencing financial strain. It provides insights on factors such as a user's
   * monthly income and expenses, disposable income, average expenditure, etc., helping lenders
   * gauge the level of affordability of a borrower.
   */
  affordability?: AffordabilityInsights | null;
};

export const accountInsightsSchema: Schema<AccountInsights> = s.object<AccountInsights>({
  risk: s.optionalNullable(s.lazy(() => riskIndicatorsSchema)),
  affordability: s.optionalNullable(s.lazy(() => affordabilityInsightsSchema)),
});
