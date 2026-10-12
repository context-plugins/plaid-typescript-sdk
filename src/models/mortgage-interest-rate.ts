import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Object containing metadata about the interest rate for the mortgage. */
export type MortgageInterestRate = {
  /**
   * Percentage value (interest rate of current mortgage, not APR) of interest payable on a loan.
   */
  percentage: number | null;
  /** The type of interest charged (fixed or variable). */
  type: string | null;
};

export const mortgageInterestRateSchema: Schema<MortgageInterestRate> = s.object<MortgageInterestRate>({
  percentage: s.nullable(s.float64()),
  type: s.nullable(s.string()),
});
