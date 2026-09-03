import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraVerificationIncomeValues = {
  grossIncome: number;
  netIncome: number;
};

export const craVerificationIncomeValuesSchema: Schema<CraVerificationIncomeValues> =
  s.object<CraVerificationIncomeValues>({
    grossIncome: s.number(),
    netIncome: s.number(),
    _keysMap: {
      grossIncome: "gross_income",
      netIncome: "net_income",
    },
  });
