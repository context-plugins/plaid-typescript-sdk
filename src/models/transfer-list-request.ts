import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferListRequest = {
  clientId?: string;
  secret?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  count?: number;
  offset?: number;
  originationAccountId?: string | null;
  originatorClientId?: string | null;
  fundingAccountId?: string | null;
};

export const transferListRequestSchema: Schema<TransferListRequest> = s.object<TransferListRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  startDate: s.optionalNullable(s.dateTime()),
  endDate: s.optionalNullable(s.dateTime()),
  count: s.optional(s.number()),
  offset: s.optional(s.number()),
  originationAccountId: s.optionalNullable(s.string()),
  originatorClientId: s.optionalNullable(s.string()),
  fundingAccountId: s.optionalNullable(s.string()),
  _keysMap: {
    clientId: "client_id",
    startDate: "start_date",
    endDate: "end_date",
    originationAccountId: "origination_account_id",
    originatorClientId: "originator_client_id",
    fundingAccountId: "funding_account_id",
  },
});
