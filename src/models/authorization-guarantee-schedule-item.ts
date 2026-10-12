import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A single entry in an authorization's adaptive guarantee settlement schedule, describing one
 * tranche of guaranteed funds.
 */
export type AuthorizationGuaranteeScheduleItem = {
  /**
   * The guaranteed amount for this schedule entry (decimal string with two digits of precision e.g.
   * "10.00").
   */
  amount: string;
  /**
   * The number of business days in the observation window for this tranche. `0` when the tranche is
   * not subject to an observation window.
   */
  observationWindowBusinessDays: number;
};

export const authorizationGuaranteeScheduleItemSchema: Schema<AuthorizationGuaranteeScheduleItem> =
  s.object<AuthorizationGuaranteeScheduleItem>({
    amount: s.string(),
    observationWindowBusinessDays: s.int(),
    _keysMap: {
      observationWindowBusinessDays: "observation_window_business_days",
    },
  });
