import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { totalInflowAmountSchema, type TotalInflowAmount } from "./total-inflow-amount.js";
import { totalInflowAmount30DSchema, type TotalInflowAmount30D } from "./total-inflow-amount30-d.js";
import { totalInflowAmount60DSchema, type TotalInflowAmount60D } from "./total-inflow-amount60-d.js";
import { totalInflowAmount90DSchema, type TotalInflowAmount90D } from "./total-inflow-amount90-d.js";
import { totalOutflowAmountSchema, type TotalOutflowAmount } from "./total-outflow-amount.js";
import { totalOutflowAmount30DSchema, type TotalOutflowAmount30D } from "./total-outflow-amount30-d.js";
import { totalOutflowAmount60DSchema, type TotalOutflowAmount60D } from "./total-outflow-amount60-d.js";
import { totalOutflowAmount90DSchema, type TotalOutflowAmount90D } from "./total-outflow-amount90-d.js";

export type BaseReportAttributes = {
  isPrimaryAccount?: boolean | null;
  primaryAccountScore?: number | null;
  nsfOverdraftTransactionsCount?: number;
  nsfOverdraftTransactionsCount30D?: number;
  nsfOverdraftTransactionsCount60D?: number;
  nsfOverdraftTransactionsCount90D?: number;
  totalInflowAmount?: TotalInflowAmount | null;
  totalInflowAmount30D?: TotalInflowAmount30D | null;
  totalInflowAmount60D?: TotalInflowAmount60D | null;
  totalInflowAmount90D?: TotalInflowAmount90D | null;
  totalOutflowAmount?: TotalOutflowAmount | null;
  totalOutflowAmount30D?: TotalOutflowAmount30D | null;
  totalOutflowAmount60D?: TotalOutflowAmount60D | null;
  totalOutflowAmount90D?: TotalOutflowAmount90D | null;
};

export const baseReportAttributesSchema: Schema<BaseReportAttributes> = s.object<BaseReportAttributes>({
  isPrimaryAccount: s.optionalNullable(s.boolean()),
  primaryAccountScore: s.optionalNullable(s.number()),
  nsfOverdraftTransactionsCount: s.optional(s.number()),
  nsfOverdraftTransactionsCount30D: s.optional(s.number()),
  nsfOverdraftTransactionsCount60D: s.optional(s.number()),
  nsfOverdraftTransactionsCount90D: s.optional(s.number()),
  totalInflowAmount: s.optionalNullable(s.lazy(() => totalInflowAmountSchema)),
  totalInflowAmount30D: s.optionalNullable(s.lazy(() => totalInflowAmount30DSchema)),
  totalInflowAmount60D: s.optionalNullable(s.lazy(() => totalInflowAmount60DSchema)),
  totalInflowAmount90D: s.optionalNullable(s.lazy(() => totalInflowAmount90DSchema)),
  totalOutflowAmount: s.optionalNullable(s.lazy(() => totalOutflowAmountSchema)),
  totalOutflowAmount30D: s.optionalNullable(s.lazy(() => totalOutflowAmount30DSchema)),
  totalOutflowAmount60D: s.optionalNullable(s.lazy(() => totalOutflowAmount60DSchema)),
  totalOutflowAmount90D: s.optionalNullable(s.lazy(() => totalOutflowAmount90DSchema)),
  _keysMap: {
    isPrimaryAccount: "is_primary_account",
    primaryAccountScore: "primary_account_score",
    nsfOverdraftTransactionsCount: "nsf_overdraft_transactions_count",
    nsfOverdraftTransactionsCount30D: "nsf_overdraft_transactions_count_30d",
    nsfOverdraftTransactionsCount60D: "nsf_overdraft_transactions_count_60d",
    nsfOverdraftTransactionsCount90D: "nsf_overdraft_transactions_count_90d",
    totalInflowAmount: "total_inflow_amount",
    totalInflowAmount30D: "total_inflow_amount_30d",
    totalInflowAmount60D: "total_inflow_amount_60d",
    totalInflowAmount90D: "total_inflow_amount_90d",
    totalOutflowAmount: "total_outflow_amount",
    totalOutflowAmount30D: "total_outflow_amount_30d",
    totalOutflowAmount60D: "total_outflow_amount_60d",
    totalOutflowAmount90D: "total_outflow_amount_90d",
  },
});
