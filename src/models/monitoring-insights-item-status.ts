import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringItemStatusCodeSchema,
  type MonitoringItemStatusCode,
} from "./monitoring-item-status-code.js";

export type MonitoringInsightsItemStatus = {
  statusCode: MonitoringItemStatusCode;
  reason?: string | null;
};

export const monitoringInsightsItemStatusSchema: Schema<MonitoringInsightsItemStatus> =
  s.object<MonitoringInsightsItemStatus>({
    statusCode: monitoringItemStatusCodeSchema,
    reason: s.optionalNullable(s.string()),
    _keysMap: {
      statusCode: "status_code",
    },
  });
