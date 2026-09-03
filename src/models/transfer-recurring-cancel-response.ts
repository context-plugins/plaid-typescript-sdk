import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRecurringCancelResponse = {
  requestId: string;
};

export const transferRecurringCancelResponseSchema: Schema<TransferRecurringCancelResponse> =
  s.object<TransferRecurringCancelResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
