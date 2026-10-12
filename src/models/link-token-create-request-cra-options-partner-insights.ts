import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craPartnerInsightsFicoInputSchema,
  type CraPartnerInsightsFicoInput,
} from "./cra-partner-insights-fico-input.js";
import { prismVersionsSchema, type PrismVersions } from "./prism-versions.js";

/** Specifies options for initializing Link for use with the Credit Partner Insights product. */
export type LinkTokenCreateRequestCraOptionsPartnerInsights = {
  /** The versions of Prism products to evaluate */
  prismVersions?: PrismVersions | null;
  /** Configuration for the FICO products used in the Partner Insights product. */
  fico?: CraPartnerInsightsFicoInput | null;
};

export const linkTokenCreateRequestCraOptionsPartnerInsightsSchema: Schema<LinkTokenCreateRequestCraOptionsPartnerInsights> =
  s.object<LinkTokenCreateRequestCraOptionsPartnerInsights>({
    prismVersions: s.optionalNullable(s.lazy(() => prismVersionsSchema)),
    fico: s.optionalNullable(s.lazy(() => craPartnerInsightsFicoInputSchema)),
    _keysMap: {
      prismVersions: "prism_versions",
    },
  });
