import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CategoryInsightDetails = {
  name: string;
  transactionCount: number;
  totalOutflows: number;
  totalInflows: number;
  topCounterparties?: string[];
};

export const categoryInsightDetailsSchema: Schema<CategoryInsightDetails> = s.object<CategoryInsightDetails>({
  name: s.string(),
  transactionCount: s.number(),
  totalOutflows: s.number(),
  totalInflows: s.number(),
  topCounterparties: s.optional(s.array(s.string())),
  _keysMap: {
    transactionCount: "transaction_count",
    totalOutflows: "total_outflows",
    totalInflows: "total_inflows",
    topCounterparties: "top_counterparties",
  },
});
