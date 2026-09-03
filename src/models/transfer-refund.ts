import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferRefundFailureSchema, type TransferRefundFailure } from "./transfer-refund-failure.js";
import { transferRefundStatusSchema, type TransferRefundStatus } from "./transfer-refund-status.js";

export type TransferRefund = {
  id: string;
  transferId: string;
  amount: string;
  status: TransferRefundStatus;
  failureReason: TransferRefundFailure | null;
  ledgerId?: string | null;
  created: Date;
  networkTraceId?: string | null;
};

export const transferRefundSchema: Schema<TransferRefund> = s.object<TransferRefund>({
  id: s.string(),
  transferId: s.string(),
  amount: s.string(),
  status: transferRefundStatusSchema,
  failureReason: s.nullable(s.lazy(() => transferRefundFailureSchema)),
  ledgerId: s.optionalNullable(s.string()),
  created: s.dateTime(),
  networkTraceId: s.optionalNullable(s.string()),
  _keysMap: {
    transferId: "transfer_id",
    failureReason: "failure_reason",
    ledgerId: "ledger_id",
    networkTraceId: "network_trace_id",
  },
});
