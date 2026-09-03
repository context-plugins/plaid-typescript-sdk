import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorTransactionsRefreshResponse = {
  requestId: string;
};

export const processorTransactionsRefreshResponseSchema: Schema<ProcessorTransactionsRefreshResponse> =
  s.object<ProcessorTransactionsRefreshResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
