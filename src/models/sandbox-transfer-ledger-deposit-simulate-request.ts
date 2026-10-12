import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferFailureSchema, type TransferFailure } from "./transfer-failure.js";
import {
  transferLedgerSweepSimulateEventTypeSchema,
  type TransferLedgerSweepSimulateEventType,
} from "./transfer-ledger-sweep-simulate-event-type.js";

/** Defines the request schema for `/sandbox/transfer/ledger/deposit/simulate` */
export type SandboxTransferLedgerDepositSimulateRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** Plaid's unique identifier for a sweep. */
  sweepId: string;
  /**
   * The asynchronous event to be simulated. May be: `posted`, `settled`, `failed`, or `returned`.
   *
   * An error will be returned if the event type is incompatible with the current ledger sweep
   * status. Compatible status --> event type transitions include:
   *
   * `sweep.pending` --> `sweep.posted`
   *
   * `sweep.pending` --> `sweep.failed`
   *
   * `sweep.posted` --> `sweep.settled`
   *
   * `sweep.posted` --> `sweep.returned`
   *
   * `sweep.settled` --> `sweep.returned`
   */
  eventType: TransferLedgerSweepSimulateEventType;
  /**
   * The failure reason if the event type for a transfer is `"failed"` or `"returned"`. Null value
   * otherwise.
   */
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
