import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MerchantInsights = {
  name: string;
  entityId?: string | null;
  website: string | null;
  transactionCount: number;
  personalFinanceCategoryPrimary: string | null;
  personalFinanceCategoryDetailed: string | null;
  totalOutflows: number;
  totalInflows: number;
};

export const merchantInsightsSchema: Schema<MerchantInsights> = s.object<MerchantInsights>({
  name: s.string(),
  entityId: s.optionalNullable(s.string()),
  website: s.nullable(s.string()),
  transactionCount: s.number(),
  personalFinanceCategoryPrimary: s.nullable(s.string()),
  personalFinanceCategoryDetailed: s.nullable(s.string()),
  totalOutflows: s.number(),
  totalInflows: s.number(),
  _keysMap: {
    entityId: "entity_id",
    transactionCount: "transaction_count",
    personalFinanceCategoryPrimary: "personal_finance_category_primary",
    personalFinanceCategoryDetailed: "personal_finance_category_detailed",
    totalOutflows: "total_outflows",
    totalInflows: "total_inflows",
  },
});
