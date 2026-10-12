import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { networkInsightsVersionSchema, type NetworkInsightsVersion } from "./network-insights-version.js";

/**
 * Deprecated. This field is no longer accepted for new clients (created on or after 2026-07-01).
 * New clients should specify required products when creating the Consumer Report. Existing
 * integrations may continue to pass `options`.
 */
export type CraCheckReportNetworkInsightsGetOptions = {
  /** The version of Network Insights. Required if using Network Insights. */
  networkInsightsVersion?: NetworkInsightsVersion | null;
};

export const craCheckReportNetworkInsightsGetOptionsSchema: Schema<CraCheckReportNetworkInsightsGetOptions> =
  s.object<CraCheckReportNetworkInsightsGetOptions>({
    networkInsightsVersion: s.optionalNullable(s.lazy(() => networkInsightsVersionSchema)),
    _keysMap: {
      networkInsightsVersion: "network_insights_version",
    },
  });
