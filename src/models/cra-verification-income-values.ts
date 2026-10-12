import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Modeled income values for a given time period. */
export type CraVerificationIncomeValues = {
  /** Gross Income modeled from trends of observed transactions. */
  grossIncome: number;
  /** Net Income estimated from observed transactions. */
  netIncome: number;
};

export const craVerificationIncomeValuesSchema: Schema<CraVerificationIncomeValues> =
  s.object<CraVerificationIncomeValues>({
    grossIncome: s.float64(),
    netIncome: s.float64(),
    _keysMap: {
      grossIncome: "gross_income",
      netIncome: "net_income",
    },
  });
