import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Modeled estimate of the annual income. */
export type CraAnnualIncomeValues = {
  /** Gross Income modeled from trends of observed transactions. */
  grossIncome: number;
  /** Net Income estimated from observed transactions. */
  netIncome: number;
};

export const craAnnualIncomeValuesSchema: Schema<CraAnnualIncomeValues> = s.object<CraAnnualIncomeValues>({
  grossIncome: s.float64(),
  netIncome: s.float64(),
  _keysMap: {
    grossIncome: "gross_income",
    netIncome: "net_income",
  },
});
