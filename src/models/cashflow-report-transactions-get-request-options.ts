import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashflowReportTransactionsGetRequestOptions = {
  accountIds?: string[];
};

export const cashflowReportTransactionsGetRequestOptionsSchema: Schema<CashflowReportTransactionsGetRequestOptions> =
  s.object<CashflowReportTransactionsGetRequestOptions>({
    accountIds: s.optional(s.array(s.string())),
    _keysMap: {
      accountIds: "account_ids",
    },
  });
