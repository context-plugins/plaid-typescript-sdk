import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferFailureSchema, type TransferFailure } from "./transfer-failure.js";
import {
  transferLedgerSweepSimulateEventTypeSchema,
  type TransferLedgerSweepSimulateEventType,
} from "./transfer-ledger-sweep-simulate-event-type.js";

export type SandboxTransferLedgerDepositSimulateRequest = {
  clientId?: string;
  secret?: string;
  sweepId: string;
  eventType: TransferLedgerSweepSimulateEventType;
  failureReason?: TransferFailure | null;
};

export const sandboxTransferLedgerDepositSimulateRequestSchema: Schema<SandboxTransferLedgerDepositSimulateRequest> =
  s.object<SandboxTransferLedgerDepositSimulateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    sweepId: s.string(),
    eventType: transferLedgerSweepSimulateEventTypeSchema,
    failureReason: s.optionalNullable(s.lazy(() => transferFailureSchema)),
    _keysMap: {
      clientId: "client_id",
      sweepId: "sweep_id",
      eventType: "event_type",
      failureReason: "failure_reason",
    },
  });
