import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportTransactionSchema, type BaseReportTransaction } from "./base-report-transaction.js";

/** Transaction data associated with the account. */
export type CraVoaReportTransactionsInsights = {
  /** Transaction history associated with the account. */
  allTransactions: BaseReportTransaction[];
  /** The latest timeframe provided by the FI, in an ISO 8601 format (YYYY-MM-DD). */
  endDate: string | null;
  /** The earliest timeframe provided by the FI, in an ISO 8601 format (YYYY-MM-DD). */
  startDate: string | null;
};

export const craVoaReportTransactionsInsightsSchema: Schema<CraVoaReportTransactionsInsights> =
  s.object<CraVoaReportTransactionsInsights>({
    allTransactions: s.array(s.lazy(() => baseReportTransactionSchema)),
    endDate: s.nullable(s.dateOnly()),
    startDate: s.nullable(s.dateOnly()),
    _keysMap: {
      allTransactions: "all_transactions",
      endDate: "end_date",
      startDate: "start_date",
    },
  });
