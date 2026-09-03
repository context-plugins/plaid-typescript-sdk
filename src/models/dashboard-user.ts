import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dashboardUserStatusSchema, type DashboardUserStatus } from "./dashboard-user-status.js";

export type DashboardUser = {
  id: string;
  createdAt: Date;
  emailAddress: string;
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
