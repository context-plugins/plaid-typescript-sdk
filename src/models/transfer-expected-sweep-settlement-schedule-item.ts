import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferExpectedSweepSettlementScheduleItem = {
  sweepSettlementDate: string;
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
