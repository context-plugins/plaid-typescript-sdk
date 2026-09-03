import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MortgageInterestRate = {
  percentage: number | null;
  type: string | null;
};

export const mortgageInterestRateSchema: Schema<MortgageInterestRate> = s.object<MortgageInterestRate>({
  percentage: s.nullable(s.number()),
  type: s.nullable(s.string()),
});
