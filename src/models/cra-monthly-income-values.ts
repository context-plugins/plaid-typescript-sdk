import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraMonthlyIncomeValues = {
  grossIncome: number;
  netIncome: number;
};

export const craMonthlyIncomeValuesSchema: Schema<CraMonthlyIncomeValues> = s.object<CraMonthlyIncomeValues>({
  grossIncome: s.number(),
  netIncome: s.number(),
  _keysMap: {
    grossIncome: "gross_income",
    netIncome: "net_income",
  },
});
