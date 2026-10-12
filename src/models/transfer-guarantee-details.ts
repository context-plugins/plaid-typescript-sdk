import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferGuaranteeScheduleItemSchema,
  type TransferGuaranteeScheduleItem,
} from "./transfer-guarantee-schedule-item.js";

/**
 * Adaptive guarantee details for a transfer, including the guaranteed amount and settlement
 * schedule. Omitted when no guarantee was attempted.
 */
export type TransferGuaranteeDetails = {
  /**
   * The amount currently covered by Plaid's guarantee (decimal string with two digits of precision
   * e.g. "10.00"). This may change over time as scheduled tranches reach their observation window
   * expiration and become guaranteed.
   */
  guaranteedAmount: string;
  /** The adaptive guarantee settlement schedule for this transfer. */
  schedule: TransferGuaranteeScheduleItem[];
};

export const transferGuaranteeDetailsSchema: Schema<TransferGuaranteeDetails> =
  s.object<TransferGuaranteeDetails>({
    guaranteedAmount: s.string(),
    schedule: s.array(s.lazy(() => transferGuaranteeScheduleItemSchema)),
    _keysMap: {
      guaranteedAmount: "guaranteed_amount",
    },
  });
