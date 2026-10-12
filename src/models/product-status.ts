import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusBreakdownSchema, type StatusBreakdown } from "./status-breakdown.js";
import { status4Schema, type Status4 } from "./status4.js";

/**
 * A representation of the status health of a request type. Auth requests, Balance requests,
 * Identity requests, Investments requests, Liabilities requests, Transactions updates, Investments
 * updates, Liabilities updates, and Item logins each have their own status object.
 */
export type ProductStatus = {
  /**
   * This field is deprecated in favor of the `breakdown` object, which provides more granular
   * institution health data.
   *
   * `HEALTHY`: the majority of requests are successful `DEGRADED`: only some requests are
   * successful `DOWN`: all requests are failing
   *
   * @deprecated
   */
  status: Status4;
  /**
   * [ISO 8601](https://wikipedia.org/wiki/ISO_8601) formatted timestamp of the last status change
   * for the institution.
   */
  lastStatusChange: Date;
  /**
   * A detailed breakdown of the institution's performance for a request type. The values for
   * `success`, `error_plaid`, and `error_institution` sum to 1. The time range used for calculating
   * the breakdown may range from the most recent few minutes to the past six hours. In general,
   * smaller institutions will show status that was calculated over a longer period of time. For
   * Investment updates, which are refreshed less frequently, the period assessed may be 24 hours or
   * more. For more details, see [Institution status
   * details](https://plaid.com/docs/account/activity/#troubleshooting-institution-insights).
   */
  breakdown: StatusBreakdown;
};

export const productStatusSchema: Schema<ProductStatus> = s.object<ProductStatus>({
  status: status4Schema,
  lastStatusChange: s.dateTime(),
  breakdown: statusBreakdownSchema,
  _keysMap: {
    lastStatusChange: "last_status_change",
  },
});
