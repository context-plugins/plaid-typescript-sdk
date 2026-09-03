import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DashboardUserStatus = {
  Invited: "invited",
  Active: "active",
  Deactivated: "deactivated",
} as const;
export type DashboardUserStatus =
  | (typeof DashboardUserStatus)[keyof typeof DashboardUserStatus]
  | (string & {});

export const dashboardUserStatusSchema: EnumSchema<DashboardUserStatus> =
  s.enumOf<DashboardUserStatus>(DashboardUserStatus);
