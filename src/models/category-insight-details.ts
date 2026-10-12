import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Insights object for categories. */
export type CategoryInsightDetails = {
  /** Category name. */
  name: string;
  /** The number of transactions associated with this category. */
  transactionCount: number;
  /** Sum of outflow amounts. */
  totalOutflows: number;
  /** Sum of inflow amounts. */
  totalInflows: number;
  /** The most common counterparties associated with this category sorted by outflow. */
  topCounterparties?: string[];
};

export const categoryInsightDetailsSchema: Schema<CategoryInsightDetails> = s.object<CategoryInsightDetails>({
  name: s.string(),
  transactionCount: s.int(),
  totalOutflows: s.float64(),
  totalInflows: s.float64(),
  topCounterparties: s.optional(s.array(s.string())),
  _keysMap: {
    transactionCount: "transaction_count",
    totalOutflows: "total_outflows",
    totalInflows: "total_inflows",
    topCounterparties: "top_counterparties",
  },
});
