import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FraudCheckOutcomeWithNoData = {
  Success: "success",
  Failed: "failed",
  NoData: "no_data",
} as const;
export type FraudCheckOutcomeWithNoData =
  | (typeof FraudCheckOutcomeWithNoData)[keyof typeof FraudCheckOutcomeWithNoData]
  | (string & {});

export const fraudCheckOutcomeWithNoDataSchema: EnumSchema<FraudCheckOutcomeWithNoData> =
  s.enumOf<FraudCheckOutcomeWithNoData>(FraudCheckOutcomeWithNoData);
