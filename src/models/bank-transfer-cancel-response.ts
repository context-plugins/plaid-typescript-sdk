import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankTransferCancelResponse = {
  requestId: string;
};

export const bankTransferCancelResponseSchema: Schema<BankTransferCancelResponse> =
  s.object<BankTransferCancelResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
