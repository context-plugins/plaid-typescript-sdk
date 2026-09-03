import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { yieldRateTypeSchema, type YieldRateType } from "./yield-rate-type.js";

export type YieldRate = {
  percentage: number;
  type: YieldRateType | null;
};

export const yieldRateSchema: Schema<YieldRate> = s.object<YieldRate>({
  percentage: s.number(),
  type: s.nullable(s.lazy(() => yieldRateTypeSchema)),
});
