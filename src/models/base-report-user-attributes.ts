import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { totalReportInflowAmountSchema, type TotalReportInflowAmount } from "./total-report-inflow-amount.js";
import {
  totalReportInflowAmount30DSchema,
  type TotalReportInflowAmount30D,
} from "./total-report-inflow-amount30-d.js";
import {
  totalReportInflowAmount60DSchema,
  type TotalReportInflowAmount60D,
} from "./total-report-inflow-amount60-d.js";
import {
  totalReportInflowAmount90DSchema,
  type TotalReportInflowAmount90D,
} from "./total-report-inflow-amount90-d.js";
import {
  totalReportOutflowAmountSchema,
  type TotalReportOutflowAmount,
} from "./total-report-outflow-amount.js";
import {
  totalReportOutflowAmount30DSchema,
  type TotalReportOutflowAmount30D,
} from "./total-report-outflow-amount30-d.js";
import {
  totalReportOutflowAmount60DSchema,
  type TotalReportOutflowAmount60D,
} from "./total-report-outflow-amount60-d.js";
import {
  totalReportOutflowAmount90DSchema,
  type TotalReportOutflowAmount90D,
} from "./total-report-outflow-amount90-d.js";

export type BaseReportUserAttributes = {
  nsfOverdraftTransactionsCount?: number;
  nsfOverdraftTransactionsCount30D?: number;
  nsfOverdraftTransactionsCount60D?: number;
  nsfOverdraftTransactionsCount90D?: number;
  totalInflowAmount?: TotalReportInflowAmount | null;
  totalInflowAmount30D?: TotalReportInflowAmount30D | null;
  totalInflowAmount60D?: TotalReportInflowAmount60D | null;
  totalInflowAmount90D?: TotalReportInflowAmount90D | null;
  totalOutflowAmount?: TotalReportOutflowAmount | null;
  totalOutflowAmount30D?: TotalReportOutflowAmount30D | null;
  totalOutflowAmount60D?: TotalReportOutflowAmount60D | null;
  totalOutflowAmount90D?: TotalReportOutflowAmount90D | null;
};

export const baseReportUserAttributesSchema: Schema<BaseReportUserAttributes> =
  s.object<BaseReportUserAttributes>({
    nsfOverdraftTransactionsCount: s.optional(s.number()),
    nsfOverdraftTransactionsCount30D: s.optional(s.number()),
    nsfOverdraftTransactionsCount60D: s.optional(s.number()),
    nsfOverdraftTransactionsCount90D: s.optional(s.number()),
    totalInflowAmount: s.optionalNullable(s.lazy(() => totalReportInflowAmountSchema)),
    totalInflowAmount30D: s.optionalNullable(s.lazy(() => totalReportInflowAmount30DSchema)),
    totalInflowAmount60D: s.optionalNullable(s.lazy(() => totalReportInflowAmount60DSchema)),
    totalInflowAmount90D: s.optionalNullable(s.lazy(() => totalReportInflowAmount90DSchema)),
    totalOutflowAmount: s.optionalNullable(s.lazy(() => totalReportOutflowAmountSchema)),
    totalOutflowAmount30D: s.optionalNullable(s.lazy(() => totalReportOutflowAmount30DSchema)),
    totalOutflowAmount60D: s.optionalNullable(s.lazy(() => totalReportOutflowAmount60DSchema)),
    totalOutflowAmount90D: s.optionalNullable(s.lazy(() => totalReportOutflowAmount90DSchema)),
    _keysMap: {
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
