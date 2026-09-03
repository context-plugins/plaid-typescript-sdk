import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionsRefreshResponse = {
  requestId: string;
};

export const transactionsRefreshResponseSchema: Schema<TransactionsRefreshResponse> =
  s.object<TransactionsRefreshResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
