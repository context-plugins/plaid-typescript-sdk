import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SweepTrigger = {
  Manual: "manual",
  Incoming: "incoming",
  BalanceThreshold: "balance_threshold",
  AutomaticAggregate: "automatic_aggregate",
} as const;
export type SweepTrigger = (typeof SweepTrigger)[keyof typeof SweepTrigger] | (string & {});

export const sweepTriggerSchema: EnumSchema<SweepTrigger> = s.enumOf<SweepTrigger>(SweepTrigger);
