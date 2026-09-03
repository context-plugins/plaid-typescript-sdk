import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
