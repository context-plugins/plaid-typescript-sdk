import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportTransactionSchema, type BaseReportTransaction } from "./base-report-transaction.js";

export type CraVoaReportTransactionsInsights = {
  allTransactions: BaseReportTransaction[];
  endDate: string | null;
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
