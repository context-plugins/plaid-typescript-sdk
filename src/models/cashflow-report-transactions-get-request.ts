import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashflowReportTransactionsGetRequestOptionsSchema,
  type CashflowReportTransactionsGetRequestOptions,
} from "./cashflow-report-transactions-get-request-options.js";

export type CashflowReportTransactionsGetRequest = {
  clientId?: string;
  accessToken: string;
  secret?: string;
  count?: number;
  cursor?: string;
  options?: CashflowReportTransactionsGetRequestOptions;
};

export const cashflowReportTransactionsGetRequestSchema: Schema<CashflowReportTransactionsGetRequest> =
  s.object<CashflowReportTransactionsGetRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    count: s.optional(s.number()),
    cursor: s.optional(s.string()),
    options: s.optional(s.lazy(() => cashflowReportTransactionsGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
    },
  });
