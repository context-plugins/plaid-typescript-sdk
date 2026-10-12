import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A single entry in the adaptive guarantee settlement schedule, describing one tranche of
 * guaranteed funds. Adds `observation_window_expiration_time`, which is only known once a transfer
 * is created.
 */
export type TransferGuaranteeScheduleItem = {
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
  /**
   * The datetime when the observation window for this tranche expires. Present only when the
   * tranche is subject to an observation window. This will be of the form `2006-01-02T15:04:05Z`.
   */
  observationWindowExpirationTime?: Date | null;
};

export const transferGuaranteeScheduleItemSchema: Schema<TransferGuaranteeScheduleItem> =
  s.object<TransferGuaranteeScheduleItem>({
    amount: s.string(),
    observationWindowBusinessDays: s.int(),
    observationWindowExpirationTime: s.optionalNullable(s.dateTime()),
    _keysMap: {
      observationWindowBusinessDays: "observation_window_business_days",
      observationWindowExpirationTime: "observation_window_expiration_time",
    },
  });
