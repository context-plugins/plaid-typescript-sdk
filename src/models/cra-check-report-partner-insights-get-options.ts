import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { prismVersionsDeprecatedSchema, type PrismVersionsDeprecated } from "./prism-versions-deprecated.js";

export type CraCheckReportPartnerInsightsGetOptions = {
  prismVersions?: PrismVersionsDeprecated | null;
};

export const craCheckReportPartnerInsightsGetOptionsSchema: Schema<CraCheckReportPartnerInsightsGetOptions> =
  s.object<CraCheckReportPartnerInsightsGetOptions>({
    prismVersions: s.optionalNullable(s.lazy(() => prismVersionsDeprecatedSchema)),
    _keysMap: {
      prismVersions: "prism_versions",
    },
  });
