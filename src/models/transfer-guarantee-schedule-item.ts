import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferGuaranteeScheduleItem = {
  amount: string;
  observationWindowBusinessDays: number;
  observationWindowExpirationTime?: Date | null;
};

export const transferGuaranteeScheduleItemSchema: Schema<TransferGuaranteeScheduleItem> =
  s.object<TransferGuaranteeScheduleItem>({
    amount: s.string(),
    observationWindowBusinessDays: s.number(),
    observationWindowExpirationTime: s.optionalNullable(s.dateTime()),
    _keysMap: {
      observationWindowBusinessDays: "observation_window_business_days",
      observationWindowExpirationTime: "observation_window_expiration_time",
    },
  });
