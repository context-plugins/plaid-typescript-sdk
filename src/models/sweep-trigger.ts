import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The trigger of the sweep
 *
 * `"manual"` - The sweep is created manually by the customer `"incoming"` - The sweep is created by
 * incoming funds flow (e.g. Incoming Wire) `"balance_threshold"` - The sweep is created by balance
 * threshold setting `"automatic_aggregate"` - The sweep is created by the Plaid automatic
 * aggregation process. These funds did not pass through the Plaid Ledger balance.
 */
export const SweepTrigger = {
  Manual: "manual",
  Incoming: "incoming",
  BalanceThreshold: "balance_threshold",
  AutomaticAggregate: "automatic_aggregate",
} as const;
export type SweepTrigger = (typeof SweepTrigger)[keyof typeof SweepTrigger] | (string & {});

export const sweepTriggerSchema: EnumSchema<SweepTrigger> = s.enumOf<SweepTrigger>(SweepTrigger);
