import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A list of add-ons that can be included in the PDF.
 *
 * `cra_income_insights`: Include Income Insights report in the PDF. `cra_partner_insights`: Include
 * Partner Insights report in the PDF.
 */
export const CraPdfAddOns = {
  CraIncomeInsights: "cra_income_insights",
  CraPartnerInsights: "cra_partner_insights",
} as const;
export type CraPdfAddOns = (typeof CraPdfAddOns)[keyof typeof CraPdfAddOns] | (string & {});

export const craPdfAddOnsSchema: EnumSchema<CraPdfAddOns> = s.enumOf<CraPdfAddOns>(CraPdfAddOns);
