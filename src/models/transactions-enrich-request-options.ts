import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  personalFinanceCategoryVersionSchema,
  type PersonalFinanceCategoryVersion,
} from "./personal-finance-category-version.js";

export type TransactionsEnrichRequestOptions = {
  includeLegacyCategory?: boolean;
  personalFinanceCategoryVersion?: PersonalFinanceCategoryVersion;
};

export const transactionsEnrichRequestOptionsSchema: Schema<TransactionsEnrichRequestOptions> =
  s.object<TransactionsEnrichRequestOptions>({
    includeLegacyCategory: s.optional(s.boolean()),
    personalFinanceCategoryVersion: s.optional(s.lazy(() => personalFinanceCategoryVersionSchema)),
    _keysMap: {
      includeLegacyCategory: "include_legacy_category",
      personalFinanceCategoryVersion: "personal_finance_category_version",
    },
  });
