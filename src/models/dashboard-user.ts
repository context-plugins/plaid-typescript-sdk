import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dashboardUserStatusSchema, type DashboardUserStatus } from "./dashboard-user-status.js";

/** Account information associated with a team member with access to the Plaid dashboard. */
export type DashboardUser = {
  /**
   * ID of the associated user. To retrieve the email address or other details of the person
   * corresponding to this ID, use `/dashboard_user/get`.
   */
  id: string;
  /** An ISO8601 formatted timestamp. */
  createdAt: Date;
  /**
   * A valid email address. Must not have leading or trailing spaces and address must be RFC
   * compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).
   */
  emailAddress: string;
  /** The current status of the user. */
  status: DashboardUserStatus;
};

export const dashboardUserSchema: Schema<DashboardUser> = s.object<DashboardUser>({
  id: s.string(),
  createdAt: s.dateTime(),
  emailAddress: s.string(),
  status: dashboardUserStatusSchema,
  _keysMap: {
    createdAt: "created_at",
    emailAddress: "email_address",
  },
});
