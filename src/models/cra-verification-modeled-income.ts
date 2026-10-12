import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationIncomeValuesSchema,
  type CraVerificationIncomeValues,
} from "./cra-verification-income-values.js";

/** Modeled estimate of current income based on recently observed income transactions. */
export type CraVerificationModeledIncome = {
  /** Modeled income values for a given time period. */
  monthly: CraVerificationIncomeValues;
  /** Modeled income values for a given time period. */
  annual: CraVerificationIncomeValues;
};

export const craVerificationModeledIncomeSchema: Schema<CraVerificationModeledIncome> =
  s.object<CraVerificationModeledIncome>({
    monthly: craVerificationIncomeValuesSchema,
    annual: craVerificationIncomeValuesSchema,
  });
