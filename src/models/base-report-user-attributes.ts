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

/** Calculated attributes derived from transaction-level data, aggregated across accounts. */
export type BaseReportUserAttributes = {
  /**
   * The number of net NSF fee transactions in the time range for the report (not counting any fees
   * that were reversed within that time range).
   */
  nsfOverdraftTransactionsCount?: number;
  /**
   * The number of net NSF fee transactions in the last 30 days in the report (not counting any fees
   * that were reversed within that time range).
   */
  nsfOverdraftTransactionsCount30D?: number;
  /**
   * The number of net NSF fee transactions in the last 60 days in the report (not counting any fees
   * that were reversed within that time range).
   */
  nsfOverdraftTransactionsCount60D?: number;
  /**
   * The number of net NSF fee transactions in the last 90 days in the report (not counting any fees
   * that were reversed within that time range).
   */
  nsfOverdraftTransactionsCount90D?: number;
  /**
   * Total amount of debit transactions into the report's accounts in the time period of the report.
   * This field only takes into account USD transactions from the accounts.
   */
  totalInflowAmount?: TotalReportInflowAmount | null;
  /**
   * Total amount of debit transactions into the report's accounts in the last 30 days. This field
   * only takes into account USD transactions from the accounts.
   */
  totalInflowAmount30D?: TotalReportInflowAmount30D | null;
  /**
   * Total amount of debit transactions into the report's accounts in the last 60 days. This field
   * only takes into account USD transactions from the accounts.
   */
  totalInflowAmount60D?: TotalReportInflowAmount60D | null;
  /**
   * Total amount of debit transactions into the report's accounts in the last 90 days. This field
   * only takes into account USD transactions from the accounts.
   */
  totalInflowAmount90D?: TotalReportInflowAmount90D | null;
  /**
   * Total amount of credit transactions out of the report's accounts in the time period of the
   * report. This field only takes into account USD transactions from the accounts.
   */
  totalOutflowAmount?: TotalReportOutflowAmount | null;
  /**
   * Total amount of credit transactions out of the report's accounts in the last 30 days. This
   * field only takes into account USD transactions from the accounts.
   */
  totalOutflowAmount30D?: TotalReportOutflowAmount30D | null;
  /**
   * Total amount of credit transactions out of the report's accounts in the last 60 days. This
   * field only takes into account USD transactions from the accounts.
   */
  totalOutflowAmount60D?: TotalReportOutflowAmount60D | null;
  /**
   * Total amount of credit transactions out of the report's accounts in the last 90 days. This
   * field only takes into account USD transactions from the accounts.
   */
  totalOutflowAmount90D?: TotalReportOutflowAmount90D | null;
};

export const baseReportUserAttributesSchema: Schema<BaseReportUserAttributes> =
  s.object<BaseReportUserAttributes>({
    nsfOverdraftTransactionsCount: s.optional(s.int()),
    nsfOverdraftTransactionsCount30D: s.optional(s.int()),
    nsfOverdraftTransactionsCount60D: s.optional(s.int()),
    nsfOverdraftTransactionsCount90D: s.optional(s.int()),
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
