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

/** Calculated attributes derived from transaction-level data. */
export type BaseReportAttributes = {
  /**
   * Prediction indicator of whether the account is a primary account. Only one account per account
   * type across the items connected will have a value of true.
   */
  isPrimaryAccount?: boolean | null;
  /**
   * Value ranging from 0-1. The higher the score, the more confident we are of the account being
   * the primary account.
   */
  primaryAccountScore?: number | null;
  /**
   * The number of net NSF fee transactions for a given account within the report time range (not
   * counting any fees that were reversed within the time range).
   */
  nsfOverdraftTransactionsCount?: number;
  /**
   * The number of net NSF fee transactions within the last 30 days for a given account (not
   * counting any fees that were reversed within the time range).
   */
  nsfOverdraftTransactionsCount30D?: number;
  /**
   * The number of net NSF fee transactions within the last 60 days for a given account (not
   * counting any fees that were reversed within the time range).
   */
  nsfOverdraftTransactionsCount60D?: number;
  /**
   * The number of net NSF fee transactions within the last 90 days for a given account (not
   * counting any fees that were reversed within the time range).
   */
  nsfOverdraftTransactionsCount90D?: number;
  /**
   * Total amount of debit transactions into the account in the time period of the report. This
   * field will be empty for non-depository accounts. This field only takes into account USD
   * transactions from the account.
   */
  totalInflowAmount?: TotalInflowAmount | null;
  /**
   * Total amount of debit transactions into the account in the last 30 days. This field will be
   * empty for non-depository accounts. This field only takes into account USD transactions from the
   * account.
   */
  totalInflowAmount30D?: TotalInflowAmount30D | null;
  /**
   * Total amount of debit transactions into the account in the last 60 days. This field will be
   * empty for non-depository accounts. This field only takes into account USD transactions from the
   * account.
   */
  totalInflowAmount60D?: TotalInflowAmount60D | null;
  /**
   * Total amount of debit transactions into the account in the last 90 days. This field will be
   * empty for non-depository accounts. This field only takes into account USD transactions from the
   * account.
   */
  totalInflowAmount90D?: TotalInflowAmount90D | null;
  /**
   * Total amount of credit transactions out of the account in the time period of the report. This
   * field will be empty for non-depository accounts. This field only takes into account USD
   * transactions from the account.
   */
  totalOutflowAmount?: TotalOutflowAmount | null;
  /**
   * Total amount of credit transactions out of the account in the last 30 days. This field will be
   * empty for non-depository accounts. This field only takes into account USD transactions from the
   * account.
   */
  totalOutflowAmount30D?: TotalOutflowAmount30D | null;
  /**
   * Total amount of credit transactions out of the account in the last 60 days. This field will be
   * empty for non-depository accounts. This field only takes into account USD transactions from the
   * account.
   */
  totalOutflowAmount60D?: TotalOutflowAmount60D | null;
  /**
   * Total amount of credit transactions out of the account in the last 90 days. This field will be
   * empty for non-depository accounts. This field only takes into account USD transactions from the
   * account.
   */
  totalOutflowAmount90D?: TotalOutflowAmount90D | null;
};

export const baseReportAttributesSchema: Schema<BaseReportAttributes> = s.object<BaseReportAttributes>({
  isPrimaryAccount: s.optionalNullable(s.boolean()),
  primaryAccountScore: s.optionalNullable(s.float64()),
  nsfOverdraftTransactionsCount: s.optional(s.int()),
  nsfOverdraftTransactionsCount30D: s.optional(s.int()),
  nsfOverdraftTransactionsCount60D: s.optional(s.int()),
  nsfOverdraftTransactionsCount90D: s.optional(s.int()),
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
