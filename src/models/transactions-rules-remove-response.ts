import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionsRulesRemoveResponse = {
  requestId: string;
};

export const transactionsRulesRemoveResponseSchema: Schema<TransactionsRulesRemoveResponse> =
  s.object<TransactionsRulesRemoveResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
