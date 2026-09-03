import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationIncomeValuesSchema,
  type CraVerificationIncomeValues,
} from "./cra-verification-income-values.js";

export type CraVerificationModeledIncome = {
  monthly: CraVerificationIncomeValues;
  annual: CraVerificationIncomeValues;
};

export const craVerificationModeledIncomeSchema: Schema<CraVerificationModeledIncome> =
  s.object<CraVerificationModeledIncome>({
    monthly: craVerificationIncomeValuesSchema,
    annual: craVerificationIncomeValuesSchema,
  });
