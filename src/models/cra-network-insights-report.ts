import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craNetworkInsightsItemSchema, type CraNetworkInsightsItem } from "./cra-network-insights-item.js";

export type CraNetworkInsightsReport = {
  reportId: string;
  generatedTime: Date;
  networkAttributes: Record<string, unknown>;
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
