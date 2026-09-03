import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DashboardUserListRequest = {
  secret?: string;
  clientId?: string;
  cursor?: string | null;
};

export const dashboardUserListRequestSchema: Schema<DashboardUserListRequest> =
  s.object<DashboardUserListRequest>({
    secret: s.optional(s.string()),
    clientId: s.optional(s.string()),
    cursor: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
    },
  });
