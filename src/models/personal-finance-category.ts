import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  personalFinanceCategoryVersionSchema,
  type PersonalFinanceCategoryVersion,
} from "./personal-finance-category-version.js";

export type PersonalFinanceCategory = {
  primary: string;
  detailed: string;
  confidenceLevel?: string | null;
  version?: PersonalFinanceCategoryVersion;
};

export const personalFinanceCategorySchema: Schema<PersonalFinanceCategory> =
  s.object<PersonalFinanceCategory>({
    primary: s.string(),
    detailed: s.string(),
    confidenceLevel: s.optionalNullable(s.string()),
    version: s.optional(s.lazy(() => personalFinanceCategoryVersionSchema)),
    _keysMap: {
      confidenceLevel: "confidence_level",
    },
  });
