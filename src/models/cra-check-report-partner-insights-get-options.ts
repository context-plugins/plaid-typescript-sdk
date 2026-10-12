import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prismVersionsDeprecatedSchema, type PrismVersionsDeprecated } from "./prism-versions-deprecated.js";

/** Deprecated, specify `partner_insights.prism_versions` instead. */
export type CraCheckReportPartnerInsightsGetOptions = {
  /**
   * Deprecated, use `partner_insights.prism_versions` instead.
   *
   * @deprecated
   */
  prismVersions?: PrismVersionsDeprecated | null;
};

export const craCheckReportPartnerInsightsGetOptionsSchema: Schema<CraCheckReportPartnerInsightsGetOptions> =
  s.object<CraCheckReportPartnerInsightsGetOptions>({
    prismVersions: s.optionalNullable(s.lazy(() => prismVersionsDeprecatedSchema)),
    _keysMap: {
      prismVersions: "prism_versions",
    },
  });
