import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorTransactionsGetRequestOptions = {
  count?: number;
  offset?: number;
  includeOriginalDescription?: boolean | null;
  includePersonalFinanceCategoryBeta?: boolean;
  includePersonalFinanceCategory?: boolean;
  includeLogoAndCounterpartyBeta?: boolean;
};

export const processorTransactionsGetRequestOptionsSchema: Schema<ProcessorTransactionsGetRequestOptions> =
  s.object<ProcessorTransactionsGetRequestOptions>({
    count: s.optional(s.number()),
    offset: s.optional(s.number()),
    includeOriginalDescription: s.optionalNullable(s.boolean()),
    includePersonalFinanceCategoryBeta: s.optional(s.boolean()),
    includePersonalFinanceCategory: s.optional(s.boolean()),
    includeLogoAndCounterpartyBeta: s.optional(s.boolean()),
    _keysMap: {
      includeOriginalDescription: "include_original_description",
      includePersonalFinanceCategoryBeta: "include_personal_finance_category_beta",
      includePersonalFinanceCategory: "include_personal_finance_category",
      includeLogoAndCounterpartyBeta: "include_logo_and_counterparty_beta",
    },
  });
