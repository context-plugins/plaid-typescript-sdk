import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Insights into a user's top merchants. */
export type MerchantInsights = {
  /** The counterparty name. */
  name: string;
  /** A unique, stable, Plaid-generated id that maps to the merchant. */
  entityId?: string | null;
  /** The website associated with the merchant. */
  website: string | null;
  /** The number of transactions associated with merchant of this type. */
  transactionCount: number;
  /** The primary personal finance category associated with this merchant. */
  personalFinanceCategoryPrimary: string | null;
  /** The detailed personal finance category associated with this merchant. */
  personalFinanceCategoryDetailed: string | null;
  /** Sum of outflow amounts. */
  totalOutflows: number;
  /** Sum of inflow amounts. */
  totalInflows: number;
};

export const merchantInsightsSchema: Schema<MerchantInsights> = s.object<MerchantInsights>({
  name: s.string(),
  entityId: s.optionalNullable(s.string()),
  website: s.nullable(s.string()),
  transactionCount: s.int(),
  personalFinanceCategoryPrimary: s.nullable(s.string()),
  personalFinanceCategoryDetailed: s.nullable(s.string()),
  totalOutflows: s.float64(),
  totalInflows: s.float64(),
  _keysMap: {
    entityId: "entity_id",
    transactionCount: "transaction_count",
    personalFinanceCategoryPrimary: "personal_finance_category_primary",
    personalFinanceCategoryDetailed: "personal_finance_category_detailed",
    totalOutflows: "total_outflows",
    totalInflows: "total_inflows",
  },
});
