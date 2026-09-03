import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  personalFinanceCategoryVersionSchema,
  type PersonalFinanceCategoryVersion,
} from "./personal-finance-category-version.js";

export type TransactionsSyncRequestOptions = {
  includeOriginalDescription?: boolean | null;
  includePersonalFinanceCategory?: boolean;
  includeLogoAndCounterpartyBeta?: boolean;
  personalFinanceCategoryVersion?: PersonalFinanceCategoryVersion;
  daysRequested?: number;
  accountId?: string;
};

export const transactionsSyncRequestOptionsSchema: Schema<TransactionsSyncRequestOptions> =
  s.object<TransactionsSyncRequestOptions>({
    includeOriginalDescription: s.optionalNullable(s.boolean()),
    includePersonalFinanceCategory: s.optional(s.boolean()),
    includeLogoAndCounterpartyBeta: s.optional(s.boolean()),
    personalFinanceCategoryVersion: s.optional(s.lazy(() => personalFinanceCategoryVersionSchema)),
    daysRequested: s.optional(s.number()),
    accountId: s.optional(s.string()),
    _keysMap: {
      includeOriginalDescription: "include_original_description",
      includePersonalFinanceCategory: "include_personal_finance_category",
      includeLogoAndCounterpartyBeta: "include_logo_and_counterparty_beta",
      personalFinanceCategoryVersion: "personal_finance_category_version",
      daysRequested: "days_requested",
      accountId: "account_id",
    },
  });
