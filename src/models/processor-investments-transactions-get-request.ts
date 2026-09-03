import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  investmentsTransactionsGetRequestOptionsSchema,
  type InvestmentsTransactionsGetRequestOptions,
} from "./investments-transactions-get-request-options.js";

export type ProcessorInvestmentsTransactionsGetRequest = {
  clientId?: string;
  options?: InvestmentsTransactionsGetRequestOptions;
  processorToken: string;
  secret?: string;
  startDate: string;
  endDate: string;
};

export const processorInvestmentsTransactionsGetRequestSchema: Schema<ProcessorInvestmentsTransactionsGetRequest> =
  s.object<ProcessorInvestmentsTransactionsGetRequest>({
    clientId: s.optional(s.string()),
    options: s.optional(s.lazy(() => investmentsTransactionsGetRequestOptionsSchema)),
    processorToken: s.string(),
    secret: s.optional(s.string()),
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
