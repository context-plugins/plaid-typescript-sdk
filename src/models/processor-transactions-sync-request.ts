import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transactionsSyncRequestOptionsSchema,
  type TransactionsSyncRequestOptions,
} from "./transactions-sync-request-options.js";

export type ProcessorTransactionsSyncRequest = {
  clientId?: string;
  processorToken: string;
  secret?: string;
  cursor?: string;
  count?: number;
  options?: TransactionsSyncRequestOptions;
};

export const processorTransactionsSyncRequestSchema: Schema<ProcessorTransactionsSyncRequest> =
  s.object<ProcessorTransactionsSyncRequest>({
    clientId: s.optional(s.string()),
    processorToken: s.string(),
    secret: s.optional(s.string()),
    cursor: s.optional(s.string()),
    count: s.optional(s.number()),
    options: s.optional(s.lazy(() => transactionsSyncRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
