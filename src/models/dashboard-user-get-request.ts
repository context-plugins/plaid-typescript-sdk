import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request input for fetching a dashboard user */
export type DashboardUserGetRequest = {
  /**
   * ID of the associated user. To retrieve the email address or other details of the person
   * corresponding to this ID, use `/dashboard_user/get`.
   */
  dashboardUserId: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
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
