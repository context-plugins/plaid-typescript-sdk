import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recurringTransferSchema, type RecurringTransfer } from "./recurring-transfer.js";

export type TransferRecurringGetResponse = {
  recurringTransfer: RecurringTransfer;
  requestId: string;
};

export const transferRecurringGetResponseSchema: Schema<TransferRecurringGetResponse> =
  s.object<TransferRecurringGetResponse>({
    recurringTransfer: recurringTransferSchema,
    requestId: s.string(),
    _keysMap: {
      recurringTransfer: "recurring_transfer",
      requestId: "request_id",
    },
  });
