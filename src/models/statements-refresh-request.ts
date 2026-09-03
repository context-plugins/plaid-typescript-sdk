import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatementsRefreshRequest = {
  accessToken: string;
  clientId?: string;
  secret?: string;
  startDate: string;
  endDate: string;
};

export const statementsRefreshRequestSchema: Schema<StatementsRefreshRequest> =
  s.object<StatementsRefreshRequest>({
    accessToken: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    _keysMap: {
      accessToken: "access_token",
      clientId: "client_id",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
