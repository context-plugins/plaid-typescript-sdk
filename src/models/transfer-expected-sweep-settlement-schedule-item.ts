import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines an expected sweep date and amount. */
export type TransferExpectedSweepSettlementScheduleItem = {
  /** The settlement date of a sweep for this transfer. */
  sweepSettlementDate: string;
  /** The accumulated amount that has been swept by `sweep_settlement_date`. */
  sweptSettledAmount: string;
};

export const transferExpectedSweepSettlementScheduleItemSchema: Schema<TransferExpectedSweepSettlementScheduleItem> =
  s.object<TransferExpectedSweepSettlementScheduleItem>({
    sweepSettlementDate: s.dateOnly(),
    sweptSettledAmount: s.string(),
    _keysMap: {
      sweepSettlementDate: "sweep_settlement_date",
      sweptSettledAmount: "swept_settled_amount",
    },
  });
