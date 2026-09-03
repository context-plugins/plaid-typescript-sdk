import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SweepStatus = {
  Pending: "pending",
  Posted: "posted",
  Settled: "settled",
  FundsAvailable: "funds_available",
  Returned: "returned",
  Failed: "failed",
} as const;
export type SweepStatus = (typeof SweepStatus)[keyof typeof SweepStatus] | (string & {});

export const sweepStatusSchema: EnumSchema<SweepStatus> = s.enumOf<SweepStatus>(SweepStatus);
