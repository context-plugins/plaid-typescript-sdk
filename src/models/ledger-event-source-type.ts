import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
