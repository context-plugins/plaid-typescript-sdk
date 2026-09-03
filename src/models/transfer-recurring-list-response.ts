import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recurringTransferSchema, type RecurringTransfer } from "./recurring-transfer.js";

export type TransferRecurringListResponse = {
  recurringTransfers: RecurringTransfer[];
  requestId: string;
};

export const transferRecurringListResponseSchema: Schema<TransferRecurringListResponse> =
  s.object<TransferRecurringListResponse>({
    recurringTransfers: s.array(s.lazy(() => recurringTransferSchema)),
    requestId: s.string(),
    _keysMap: {
      recurringTransfers: "recurring_transfers",
      requestId: "request_id",
    },
  });
