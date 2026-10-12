import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craNetworkInsightsItemSchema, type CraNetworkInsightsItem } from "./cra-network-insights-item.js";

/** Contains data for the CRA Network Attributes Report. */
export type CraNetworkInsightsReport = {
  /** The unique identifier associated with the report object. */
  reportId: string;
  /** The time when the report was generated. */
  generatedTime: Date;
  /**
   * A map of network attributes, where the key is a string, and the value is a float, int, or
   * boolean. For a full list of attributes, contact your account manager.
   */
  networkAttributes: Record<string, unknown>;
  /** The Items the end user connected in Link. */
  items: CraNetworkInsightsItem[];
};

export const craNetworkInsightsReportSchema: Schema<CraNetworkInsightsReport> =
  s.object<CraNetworkInsightsReport>({
    reportId: s.string(),
    generatedTime: s.dateTime(),
    networkAttributes: s.record(s.string(), s.unknown()),
    items: s.array(s.lazy(() => craNetworkInsightsItemSchema)),
    _keysMap: {
      reportId: "report_id",
      generatedTime: "generated_time",
      networkAttributes: "network_attributes",
    },
  });
