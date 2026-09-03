import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraIncomeCategory = {
  primary: string;
  secondary: string;
};

export const craIncomeCategorySchema: Schema<CraIncomeCategory> = s.object<CraIncomeCategory>({
  primary: s.string(),
  secondary: s.string(),
});
