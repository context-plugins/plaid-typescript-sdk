import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncomeInsightsVersion = {
  Ii2: "II2",
} as const;
export type IncomeInsightsVersion =
  | (typeof IncomeInsightsVersion)[keyof typeof IncomeInsightsVersion]
  | (string & {});

export const incomeInsightsVersionSchema: EnumSchema<IncomeInsightsVersion> =
  s.enumOf<IncomeInsightsVersion>(IncomeInsightsVersion);
