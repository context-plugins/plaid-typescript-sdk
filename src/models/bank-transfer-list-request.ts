import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferDirectionSchema, type BankTransferDirection } from "./bank-transfer-direction.js";

export type BankTransferListRequest = {
  clientId?: string;
  secret?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  count?: number;
  offset?: number;
  originationAccountId?: string | null;
  direction?: BankTransferDirection | null;
};

export const bankTransferListRequestSchema: Schema<BankTransferListRequest> =
  s.object<BankTransferListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.optionalNullable(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
    count: s.optional(s.number()),
    offset: s.optional(s.number()),
    originationAccountId: s.optionalNullable(s.string()),
    direction: s.optionalNullable(s.lazy(() => bankTransferDirectionSchema)),
    _keysMap: {
      clientId: "client_id",
      startDate: "start_date",
      endDate: "end_date",
      originationAccountId: "origination_account_id",
    },
  });
