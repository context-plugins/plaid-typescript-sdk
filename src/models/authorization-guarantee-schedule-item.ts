import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthorizationGuaranteeScheduleItem = {
  amount: string;
  observationWindowBusinessDays: number;
};

export const authorizationGuaranteeScheduleItemSchema: Schema<AuthorizationGuaranteeScheduleItem> =
  s.object<AuthorizationGuaranteeScheduleItem>({
    amount: s.string(),
    observationWindowBusinessDays: s.number(),
    _keysMap: {
      observationWindowBusinessDays: "observation_window_business_days",
    },
  });
