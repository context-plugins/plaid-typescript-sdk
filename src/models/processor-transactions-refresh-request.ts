import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorTransactionsRefreshRequest = {
  clientId?: string;
  processorToken: string;
  secret?: string;
};

export const processorTransactionsRefreshRequestSchema: Schema<ProcessorTransactionsRefreshRequest> =
  s.object<ProcessorTransactionsRefreshRequest>({
    clientId: s.optional(s.string()),
    processorToken: s.string(),
    secret: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      processorToken: "processor_token",
    },
  });
