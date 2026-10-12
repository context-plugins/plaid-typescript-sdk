import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsFicoInputSchema,
  type CraPartnerInsightsFicoInput,
} from "./cra-partner-insights-fico-input.js";
import { prismVersionsSchema, type PrismVersions } from "./prism-versions.js";

/** Defines configuration to generate Partner Insights. */
export type CraCheckReportCreatePartnerInsightsOptions = {
  /** The versions of Prism products to evaluate */
  prismVersions?: PrismVersions | null;
  /** Configuration for the FICO products used in the Partner Insights product. */
  fico?: CraPartnerInsightsFicoInput | null;
};

export const craCheckReportCreatePartnerInsightsOptionsSchema: Schema<CraCheckReportCreatePartnerInsightsOptions> =
  s.object<CraCheckReportCreatePartnerInsightsOptions>({
    prismVersions: s.optionalNullable(s.lazy(() => prismVersionsSchema)),
    fico: s.optionalNullable(s.lazy(() => craPartnerInsightsFicoInputSchema)),
    _keysMap: {
      prismVersions: "prism_versions",
    },
  });
