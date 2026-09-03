import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  personalFinanceCategoryVersionSchema,
  type PersonalFinanceCategoryVersion,
} from "./personal-finance-category-version.js";

export type TransactionsRecurringGetRequestOptions = {
  includePersonalFinanceCategory?: boolean;
  personalFinanceCategoryVersion?: PersonalFinanceCategoryVersion;
};

export const transactionsRecurringGetRequestOptionsSchema: Schema<TransactionsRecurringGetRequestOptions> =
  s.object<TransactionsRecurringGetRequestOptions>({
    includePersonalFinanceCategory: s.optional(s.boolean()),
    personalFinanceCategoryVersion: s.optional(s.lazy(() => personalFinanceCategoryVersionSchema)),
    _keysMap: {
      includePersonalFinanceCategory: "include_personal_finance_category",
      personalFinanceCategoryVersion: "personal_finance_category_version",
    },
  });
