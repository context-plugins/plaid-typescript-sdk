import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashflowReportRefreshRequest = {
  clientId?: string;
  accessToken: string;
  secret?: string;
  daysRequested: number;
};

export const cashflowReportRefreshRequestSchema: Schema<CashflowReportRefreshRequest> =
  s.object<CashflowReportRefreshRequest>({
    clientId: s.optional(s.string()),
    accessToken: s.string(),
    secret: s.optional(s.string()),
    daysRequested: s.number(),
    _keysMap: {
      clientId: "client_id",
      accessToken: "access_token",
      daysRequested: "days_requested",
    },
  });
