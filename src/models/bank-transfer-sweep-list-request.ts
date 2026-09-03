import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BankTransferSweepListRequest = {
  clientId?: string;
  secret?: string;
  originationAccountId?: string | null;
  startTime?: Date | null;
  endTime?: Date | null;
  count?: number | null;
};

export const bankTransferSweepListRequestSchema: Schema<BankTransferSweepListRequest> =
  s.object<BankTransferSweepListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originationAccountId: s.optionalNullable(s.string()),
    startTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    count: s.optionalNullable(s.number()),
    _keysMap: {
      clientId: "client_id",
      originationAccountId: "origination_account_id",
      startTime: "start_time",
      endTime: "end_time",
    },
  });
