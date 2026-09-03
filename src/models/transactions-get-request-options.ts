import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  personalFinanceCategoryVersionSchema,
  type PersonalFinanceCategoryVersion,
} from "./personal-finance-category-version.js";

export type TransactionsGetRequestOptions = {
  accountIds?: string[];
  count?: number;
  offset?: number;
  includeOriginalDescription?: boolean | null;
  includePersonalFinanceCategoryBeta?: boolean;
  includePersonalFinanceCategory?: boolean;
  includeLogoAndCounterpartyBeta?: boolean;
  personalFinanceCategoryVersion?: PersonalFinanceCategoryVersion;
  daysRequested?: number;
};

export const transactionsGetRequestOptionsSchema: Schema<TransactionsGetRequestOptions> =
  s.object<TransactionsGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    count: s.optional(s.number()),
    offset: s.optional(s.number()),
    includeOriginalDescription: s.optionalNullable(s.boolean()),
    includePersonalFinanceCategoryBeta: s.optional(s.boolean()),
    includePersonalFinanceCategory: s.optional(s.boolean()),
    includeLogoAndCounterpartyBeta: s.optional(s.boolean()),
    personalFinanceCategoryVersion: s.optional(s.lazy(() => personalFinanceCategoryVersionSchema)),
    daysRequested: s.optional(s.number()),
    _keysMap: {
      accountIds: "account_ids",
      includeOriginalDescription: "include_original_description",
      includePersonalFinanceCategoryBeta: "include_personal_finance_category_beta",
      includePersonalFinanceCategory: "include_personal_finance_category",
      includeLogoAndCounterpartyBeta: "include_logo_and_counterparty_beta",
      personalFinanceCategoryVersion: "personal_finance_category_version",
      daysRequested: "days_requested",
    },
  });
