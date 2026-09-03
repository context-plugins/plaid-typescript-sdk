import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraAnnualIncomeValues = {
  grossIncome: number;
  netIncome: number;
};

export const craAnnualIncomeValuesSchema: Schema<CraAnnualIncomeValues> = s.object<CraAnnualIncomeValues>({
  grossIncome: s.number(),
  netIncome: s.number(),
  _keysMap: {
    grossIncome: "gross_income",
    netIncome: "net_income",
  },
});
