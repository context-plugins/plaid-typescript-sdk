import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditCategory = {
  primary: string;
  detailed: string;
};

export const creditCategorySchema: Schema<CreditCategory> = s.object<CreditCategory>({
  primary: s.string(),
  detailed: s.string(),
});
