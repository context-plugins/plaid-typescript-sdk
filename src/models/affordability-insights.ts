import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expenditureInsightsSchema, type ExpenditureInsights } from "./expenditure-insights.js";
import { incomeInsightsSchema, type IncomeInsights } from "./income-insights.js";

/**
 * Affordability insights focus on providing signal on the ability of a borrower to repay their loan
 * without experiencing financial strain. It provides insights on factors such as a user's monthly
 * income and expenses, disposable income, average expenditure, etc., helping lenders gauge the
 * level of affordability of a borrower.
 */
export type AffordabilityInsights = {
  /**
   * Comprehensive analysis of spending patterns, categorizing expenses into essential,
   * non-essential, and other categories.
   */
  expenditure?: ExpenditureInsights | null;
  /**
   * Comprehensive income analysis including total income, income excluding transfers, and inbound
   * transfer amounts.
   */
  income?: IncomeInsights | null;
};

export const affordabilityInsightsSchema: Schema<AffordabilityInsights> = s.object<AffordabilityInsights>({
  expenditure: s.optionalNullable(s.lazy(() => expenditureInsightsSchema)),
  income: s.optionalNullable(s.lazy(() => incomeInsightsSchema)),
});
