import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsFicoInputSchema,
  type CraPartnerInsightsFicoInput,
} from "./cra-partner-insights-fico-input.js";
import { prismVersionsSchema, type PrismVersions } from "./prism-versions.js";

/**
 * Deprecated. This field is no longer accepted for new clients (created on or after 2026-07-01).
 * New clients should specify required products when creating the Consumer Report. Existing
 * integrations may continue to pass `partner_insights`.
 */
export type CraCheckReportPartnerInsightsGetPartnerInsights = {
  /** The versions of Prism products to evaluate */
  prismVersions?: PrismVersions | null;
  /** Configuration for the FICO products used in the Partner Insights product. */
  fico?: CraPartnerInsightsFicoInput | null;
};

export const craCheckReportPartnerInsightsGetPartnerInsightsSchema: Schema<CraCheckReportPartnerInsightsGetPartnerInsights> =
  s.object<CraCheckReportPartnerInsightsGetPartnerInsights>({
    prismVersions: s.optionalNullable(s.lazy(() => prismVersionsSchema)),
    fico: s.optionalNullable(s.lazy(() => craPartnerInsightsFicoInputSchema)),
    _keysMap: {
      prismVersions: "prism_versions",
    },
  });
