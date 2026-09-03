import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dashboardUserSchema, type DashboardUser } from "./dashboard-user.js";

export type DashboardUserListResponse = {
  dashboardUsers: DashboardUser[];
  nextCursor: string | null;
  requestId: string;
};

export const dashboardUserListResponseSchema: Schema<DashboardUserListResponse> =
  s.object<DashboardUserListResponse>({
    dashboardUsers: s.array(s.lazy(() => dashboardUserSchema)),
    nextCursor: s.nullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      dashboardUsers: "dashboard_users",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
