import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsFicoInputSchema,
  type CraPartnerInsightsFicoInput,
} from "./cra-partner-insights-fico-input.js";
import { prismVersionsSchema, type PrismVersions } from "./prism-versions.js";

export type CraCheckReportCreatePartnerInsightsOptions = {
  prismVersions?: PrismVersions | null;
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
