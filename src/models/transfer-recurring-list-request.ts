import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRecurringListRequest = {
  clientId?: string;
  secret?: string;
  startTime?: Date | null;
  endTime?: Date | null;
  count?: number;
  offset?: number;
  fundingAccountId?: string | null;
};

export const transferRecurringListRequestSchema: Schema<TransferRecurringListRequest> =
  s.object<TransferRecurringListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    count: s.optional(s.number()),
    offset: s.optional(s.number()),
    fundingAccountId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      startTime: "start_time",
      endTime: "end_time",
      fundingAccountId: "funding_account_id",
    },
  });
