import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craAnnualIncomeValuesSchema, type CraAnnualIncomeValues } from "./cra-annual-income-values.js";
import { craMonthlyIncomeValuesSchema, type CraMonthlyIncomeValues } from "./cra-monthly-income-values.js";

/**
 * Forward-looking modeled estimate of income based on recent income transactions and trends in
 * active streams.
 */
export type CraProjectedModeledIncome = {
  /** Modeled estimate of the monthly income. */
  monthly: CraMonthlyIncomeValues;
  /** Modeled estimate of the annual income. */
  annual: CraAnnualIncomeValues;
};

export const craProjectedModeledIncomeSchema: Schema<CraProjectedModeledIncome> =
  s.object<CraProjectedModeledIncome>({
    monthly: craMonthlyIncomeValuesSchema,
    annual: craAnnualIncomeValuesSchema,
  });
