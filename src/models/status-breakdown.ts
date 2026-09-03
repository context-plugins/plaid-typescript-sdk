import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refreshIntervalSchema, type RefreshInterval } from "./refresh-interval.js";

export type StatusBreakdown = {
  success: number;
  errorPlaid: number;
  errorInstitution: number;
  refreshInterval?: RefreshInterval;
};

export const statusBreakdownSchema: Schema<StatusBreakdown> = s.object<StatusBreakdown>({
  success: s.number(),
  errorPlaid: s.number(),
  errorInstitution: s.number(),
  refreshInterval: s.optional(s.lazy(() => refreshIntervalSchema)),
  _keysMap: {
    errorPlaid: "error_plaid",
    errorInstitution: "error_institution",
    refreshInterval: "refresh_interval",
  },
});
