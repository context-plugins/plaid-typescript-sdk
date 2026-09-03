import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sweepStatusSchema, type SweepStatus } from "./sweep-status.js";
import { sweepTriggerSchema, type SweepTrigger } from "./sweep-trigger.js";

export type TransferSweepListRequest = {
  clientId?: string;
  secret?: string;
  startDate?: Date | null;
  endDate?: Date | null;
  count?: number | null;
  offset?: number;
  amount?: string | null;
  status?: SweepStatus | null;
  originatorClientId?: string | null;
  fundingAccountId?: string | null;
  transferId?: string | null;
  trigger?: SweepTrigger | null;
};

export const transferSweepListRequestSchema: Schema<TransferSweepListRequest> =
  s.object<TransferSweepListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.optionalNullable(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
    count: s.optionalNullable(s.number()),
    offset: s.optional(s.number()),
    amount: s.optionalNullable(s.string()),
    status: s.optionalNullable(s.lazy(() => sweepStatusSchema)),
    originatorClientId: s.optionalNullable(s.string()),
    fundingAccountId: s.optionalNullable(s.string()),
    transferId: s.optionalNullable(s.string()),
    trigger: s.optionalNullable(s.lazy(() => sweepTriggerSchema)),
    _keysMap: {
      clientId: "client_id",
      startDate: "start_date",
      endDate: "end_date",
      originatorClientId: "originator_client_id",
      fundingAccountId: "funding_account_id",
      transferId: "transfer_id",
    },
  });
