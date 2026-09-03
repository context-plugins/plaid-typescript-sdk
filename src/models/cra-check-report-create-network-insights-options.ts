import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { networkInsightsVersionSchema, type NetworkInsightsVersion } from "./network-insights-version.js";

export type CraCheckReportCreateNetworkInsightsOptions = {
  networkInsightsVersion?: NetworkInsightsVersion | null;
};

export const craCheckReportCreateNetworkInsightsOptionsSchema: Schema<CraCheckReportCreateNetworkInsightsOptions> =
  s.object<CraCheckReportCreateNetworkInsightsOptions>({
    networkInsightsVersion: s.optionalNullable(s.lazy(() => networkInsightsVersionSchema)),
    _keysMap: {
      networkInsightsVersion: "network_insights_version",
    },
  });
