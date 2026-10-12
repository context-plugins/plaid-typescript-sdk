import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a ledger event in the Transfers API. */
export type TransferLedgerEvent = {
  /** Plaid's unique identifier for this ledger event. */
  ledgerEventId: string;
  /** The ID of the ledger this event belongs to. */
  ledgerId: string;
  /** The amount of the ledger event as a decimal string. */
  amount: string;
  /** The ID of the transfer source that triggered this ledger event. */
  transferId?: string | null;
  /** The ID of the refund source that triggered this ledger event. */
  refundId?: string | null;
  /** The ID of the sweep source that triggered this ledger event. */
  sweepId?: string | null;
  /** A description of the ledger event. */
  description: string;
  /** The new pending balance after this event. */
  pendingBalance: string;
  /** The new available balance after this event. */
  availableBalance: string;
  /** The type of balance that was impacted by this event. */
  type: string;
  /** The datetime when this ledger event occurred. */
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
