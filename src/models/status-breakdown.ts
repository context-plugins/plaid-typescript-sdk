import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refreshIntervalSchema, type RefreshInterval } from "./refresh-interval.js";

/**
 * A detailed breakdown of the institution's performance for a request type. The values for
 * `success`, `error_plaid`, and `error_institution` sum to 1. The time range used for calculating
 * the breakdown may range from the most recent few minutes to the past six hours. In general,
 * smaller institutions will show status that was calculated over a longer period of time. For
 * Investment updates, which are refreshed less frequently, the period assessed may be 24 hours or
 * more. For more details, see [Institution status
 * details](https://plaid.com/docs/account/activity/#troubleshooting-institution-insights).
 */
export type StatusBreakdown = {
  /** The percentage of login attempts that are successful, expressed as a decimal. */
  success: number;
  /**
   * The percentage of logins that are failing due to an internal Plaid issue, expressed as a
   * decimal.
   */
  errorPlaid: number;
  /**
   * The percentage of logins that are failing due to an issue in the institution's system,
   * expressed as a decimal.
   */
  errorInstitution: number;
  /**
   * How frequently data for subscription products like Investments, Transactions, and Liabilities,
   * is being refreshed, relative to the institution's normal scheduling. The `refresh_interval` may
   * be `DELAYED` or `STOPPED` even when the success rate is high.
   */
  refreshInterval?: RefreshInterval;
};

export const statusBreakdownSchema: Schema<StatusBreakdown> = s.object<StatusBreakdown>({
  success: s.float64(),
  errorPlaid: s.float64(),
  errorInstitution: s.float64(),
  refreshInterval: s.optional(s.lazy(() => refreshIntervalSchema)),
  _keysMap: {
    errorPlaid: "error_plaid",
    errorInstitution: "error_institution",
    refreshInterval: "refresh_interval",
  },
});
