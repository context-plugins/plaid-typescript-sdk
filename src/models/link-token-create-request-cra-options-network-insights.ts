import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { networkInsightsVersionSchema, type NetworkInsightsVersion } from "./network-insights-version.js";

/** Specifies options for initializing Link for use with the CRA Network Insights product. */
export type LinkTokenCreateRequestCraOptionsNetworkInsights = {
  /** The version of Network Insights. Required if using Network Insights. */
  networkInsightsVersion?: NetworkInsightsVersion | null;
};

export const linkTokenCreateRequestCraOptionsNetworkInsightsSchema: Schema<LinkTokenCreateRequestCraOptionsNetworkInsights> =
  s.object<LinkTokenCreateRequestCraOptionsNetworkInsights>({
    networkInsightsVersion: s.optionalNullable(s.lazy(() => networkInsightsVersionSchema)),
    _keysMap: {
      networkInsightsVersion: "network_insights_version",
    },
  });
