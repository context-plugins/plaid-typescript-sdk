import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dashboardUserSchema, type DashboardUser } from "./dashboard-user.js";

/** Paginated list of dashboard users */
export type DashboardUserListResponse = {
  /** List of dashboard users */
  dashboardUsers: DashboardUser[];
  /** An identifier that determines which page of results you receive. */
  nextCursor: string | null;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
