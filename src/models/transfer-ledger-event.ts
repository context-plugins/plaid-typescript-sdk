import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferLedgerEvent = {
  ledgerEventId: string;
  ledgerId: string;
  amount: string;
  transferId?: string | null;
  refundId?: string | null;
  sweepId?: string | null;
  description: string;
  pendingBalance: string;
  availableBalance: string;
  type: string;
  timestamp: Date;
};

export const transferLedgerEventSchema: Schema<TransferLedgerEvent> = s.object<TransferLedgerEvent>({
  ledgerEventId: s.string(),
  ledgerId: s.string(),
  amount: s.string(),
  transferId: s.optionalNullable(s.string()),
  refundId: s.optionalNullable(s.string()),
  sweepId: s.optionalNullable(s.string()),
  description: s.string(),
  pendingBalance: s.string(),
  availableBalance: s.string(),
  type: s.string(),
  timestamp: s.dateTime(),
  _keysMap: {
    ledgerEventId: "ledger_event_id",
    ledgerId: "ledger_id",
    transferId: "transfer_id",
    refundId: "refund_id",
    sweepId: "sweep_id",
    pendingBalance: "pending_balance",
    availableBalance: "available_balance",
  },
});
