import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DashboardUserGetRequest = {
  dashboardUserId: string;
  secret?: string;
  clientId?: string;
};

export const dashboardUserGetRequestSchema: Schema<DashboardUserGetRequest> =
  s.object<DashboardUserGetRequest>({
    dashboardUserId: s.string(),
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    _keysMap: {
      dashboardUserId: "dashboard_user_id",
      clientId: "client_id",
    },
  });
