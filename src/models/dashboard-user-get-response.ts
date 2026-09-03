import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dashboardUserStatusSchema, type DashboardUserStatus } from "./dashboard-user-status.js";

export type DashboardUserGetResponse = {
  id: string;
  createdAt: Date;
  emailAddress: string;
  status: DashboardUserStatus;
  requestId: string;
};

export const dashboardUserGetResponseSchema: Schema<DashboardUserGetResponse> =
  s.object<DashboardUserGetResponse>({
    id: s.string(),
    createdAt: s.dateTime(),
    emailAddress: s.string(),
    status: dashboardUserStatusSchema,
    requestId: s.string(),
    _keysMap: {
      createdAt: "created_at",
      emailAddress: "email_address",
      requestId: "request_id",
    },
  });
