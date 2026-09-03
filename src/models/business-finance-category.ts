import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BusinessFinanceCategory = {
  primary: string;
  detailed: string;
  confidenceLevel?: string | null;
};

export const businessFinanceCategorySchema: Schema<BusinessFinanceCategory> =
  s.object<BusinessFinanceCategory>({
    primary: s.string(),
    detailed: s.string(),
    confidenceLevel: s.optionalNullable(s.string()),
    _keysMap: {
      confidenceLevel: "confidence_level",
    },
  });
