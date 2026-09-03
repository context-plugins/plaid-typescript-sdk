import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskCheckEmailIsDeliverableStatus = {
  Yes: "yes",
  No: "no",
  NoData: "no_data",
} as const;
export type RiskCheckEmailIsDeliverableStatus =
  | (typeof RiskCheckEmailIsDeliverableStatus)[keyof typeof RiskCheckEmailIsDeliverableStatus]
  | (string & {});

export const riskCheckEmailIsDeliverableStatusSchema: EnumSchema<RiskCheckEmailIsDeliverableStatus> =
  s.enumOf<RiskCheckEmailIsDeliverableStatus>(RiskCheckEmailIsDeliverableStatus);
