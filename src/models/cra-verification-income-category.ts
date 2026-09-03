import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraVerificationIncomeCategory = {
  primary: string;
  secondary: string;
};

export const craVerificationIncomeCategorySchema: Schema<CraVerificationIncomeCategory> =
  s.object<CraVerificationIncomeCategory>({
    primary: s.string(),
    secondary: s.string(),
  });
