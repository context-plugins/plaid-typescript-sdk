import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  processorTransactionsGetRequestOptionsSchema,
  type ProcessorTransactionsGetRequestOptions,
} from "./processor-transactions-get-request-options.js";

export type ProcessorTransactionsGetRequest = {
  clientId?: string;
  options?: ProcessorTransactionsGetRequestOptions;
  processorToken: string;
  secret?: string;
  startDate: string;
  endDate: string;
};

export const processorTransactionsGetRequestSchema: Schema<ProcessorTransactionsGetRequest> =
  s.object<ProcessorTransactionsGetRequest>({
    clientId: s.optional(s.string()),
    options: s.optional(s.lazy(() => processorTransactionsGetRequestOptionsSchema)),
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
