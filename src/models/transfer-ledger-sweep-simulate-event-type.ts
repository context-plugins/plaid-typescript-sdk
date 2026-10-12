import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The asynchronous event to be simulated. May be: `posted`, `settled`, `failed`, or `returned`.
 *
 * An error will be returned if the event type is incompatible with the current ledger sweep status.
 * Compatible status --> event type transitions include:
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
export const TransferLedgerSweepSimulateEventType = {
  SweepPosted: "sweep.posted",
  SweepSettled: "sweep.settled",
  SweepReturned: "sweep.returned",
  SweepFailed: "sweep.failed",
} as const;
export type TransferLedgerSweepSimulateEventType =
  | (typeof TransferLedgerSweepSimulateEventType)[keyof typeof TransferLedgerSweepSimulateEventType]
  | (string & {});

export const transferLedgerSweepSimulateEventTypeSchema: EnumSchema<TransferLedgerSweepSimulateEventType> =
  s.enumOf<TransferLedgerSweepSimulateEventType>(TransferLedgerSweepSimulateEventType);
