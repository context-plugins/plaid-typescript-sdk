import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringItemStatusCodeSchema,
  type MonitoringItemStatusCode,
} from "./monitoring-item-status-code.js";

/** An object with details of the Monitoring Insights Item's status. */
export type MonitoringInsightsItemStatus = {
  /** Enum for the status of the Item's insights */
  statusCode: MonitoringItemStatusCode;
  /**
   * A reason for why a Monitoring Insights Report is not available. This field will only be
   * populated when the `status_code` is not `AVAILABLE`
   */
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
