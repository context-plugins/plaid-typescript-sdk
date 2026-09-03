import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craAnnualIncomeValuesSchema, type CraAnnualIncomeValues } from "./cra-annual-income-values.js";
import { craMonthlyIncomeValuesSchema, type CraMonthlyIncomeValues } from "./cra-monthly-income-values.js";

export type CraProjectedModeledIncome = {
  monthly: CraMonthlyIncomeValues;
  annual: CraAnnualIncomeValues;
};

export const craProjectedModeledIncomeSchema: Schema<CraProjectedModeledIncome> =
  s.object<CraProjectedModeledIncome>({
    monthly: craMonthlyIncomeValuesSchema,
    annual: craAnnualIncomeValuesSchema,
  });
