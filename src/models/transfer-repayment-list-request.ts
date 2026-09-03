import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRepaymentListRequest = {
  clientId?: string;
  secret?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  count?: number | null;
  offset?: number;
};

export const transferRepaymentListRequestSchema: Schema<TransferRepaymentListRequest> =
  s.object<TransferRepaymentListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.optionalNullable(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
    count: s.optionalNullable(s.number()),
    offset: s.optional(s.number()),
    _keysMap: {
      clientId: "client_id",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
