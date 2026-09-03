import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsRecurringGetRequestOptionsSchema,
  type TransactionsRecurringGetRequestOptions,
} from "./transactions-recurring-get-request-options.js";

export type ProcessorTransactionsRecurringGetRequest = {
  clientId?: string;
  processorToken: string;
  secret?: string;
  options?: TransactionsRecurringGetRequestOptions;
};

export const processorTransactionsRecurringGetRequestSchema: Schema<ProcessorTransactionsRecurringGetRequest> =
  s.object<ProcessorTransactionsRecurringGetRequest>({
    clientId: s.optional(s.string()),
    processorToken: s.string(),
    secret: s.optional(s.string()),
    options: s.optional(s.lazy(() => transactionsRecurringGetRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
