import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferGuaranteeScheduleItemSchema,
  type TransferGuaranteeScheduleItem,
} from "./transfer-guarantee-schedule-item.js";

export type TransferGuaranteeDetails = {
  guaranteedAmount: string;
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
