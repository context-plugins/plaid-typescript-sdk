import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craAnnualIncomeValuesSchema, type CraAnnualIncomeValues } from "./cra-annual-income-values.js";
import { craMonthlyIncomeValuesSchema, type CraMonthlyIncomeValues } from "./cra-monthly-income-values.js";

/** Modeled estimate of current income based on recently observed income transactions. */
export type CraCurrentModeledIncome = {
  /** Modeled estimate of the monthly income. */
  monthly: CraMonthlyIncomeValues;
  /** Modeled estimate of the annual income. */
  annual: CraAnnualIncomeValues;
};

export const craCurrentModeledIncomeSchema: Schema<CraCurrentModeledIncome> =
  s.object<CraCurrentModeledIncome>({
    monthly: craMonthlyIncomeValuesSchema,
    annual: craAnnualIncomeValuesSchema,
  });
