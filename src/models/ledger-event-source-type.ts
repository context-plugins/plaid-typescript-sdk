import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Source of the ledger event.
 *
 * `"TRANSFER"` - The source of the ledger event is a transfer `"SWEEP"` - The source of the ledger
 * event is a sweep `"REFUND"` - The source of the ledger event is a refund
 */
export const LedgerEventSourceType = {
  Transfer: "TRANSFER",
  Sweep: "SWEEP",
  Refund: "REFUND",
} as const;
export type LedgerEventSourceType =
  | (typeof LedgerEventSourceType)[keyof typeof LedgerEventSourceType]
  | (string & {});

export const ledgerEventSourceTypeSchema: EnumSchema<LedgerEventSourceType> =
  s.enumOf<LedgerEventSourceType>(LedgerEventSourceType);
