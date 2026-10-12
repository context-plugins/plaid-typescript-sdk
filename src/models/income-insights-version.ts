import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The version of Income Insights to use. This value is not shared across API calls for the same
 * resource. If it is omitted from a request, the default version is used, even if a version was set
 * in an earlier call such as `/link/token/create` or `/cra/check_report/create`.
 */
export const IncomeInsightsVersion = {
  Ii2: "II2",
} as const;
export type IncomeInsightsVersion =
  | (typeof IncomeInsightsVersion)[keyof typeof IncomeInsightsVersion]
  | (string & {});

export const incomeInsightsVersionSchema: EnumSchema<IncomeInsightsVersion> =
  s.enumOf<IncomeInsightsVersion>(IncomeInsightsVersion);
