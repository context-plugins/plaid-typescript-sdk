import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sweepFailureSchema, type SweepFailure } from "./sweep-failure.js";
import { sweepStatusSchema, type SweepStatus } from "./sweep-status.js";
import { sweepTriggerSchema, type SweepTrigger } from "./sweep-trigger.js";

export type SimulatedTransferSweep = {
  id: string;
  fundingAccountId: string;
  ledgerId?: string | null;
  created: Date;
  amount: string;
  isoCurrencyCode: string;
  settled: string | null;
  expectedFundsAvailableDate?: string | null;
  status?: SweepStatus | null;
  trigger?: SweepTrigger | null;
  description?: string;
  networkTraceId?: string | null;
  failureReason?: SweepFailure | null;
};

export const simulatedTransferSweepSchema: Schema<SimulatedTransferSweep> = s.object<SimulatedTransferSweep>({
  id: s.string(),
  fundingAccountId: s.string(),
  ledgerId: s.optionalNullable(s.string()),
  created: s.dateTime(),
  amount: s.string(),
  isoCurrencyCode: s.string(),
  settled: s.nullable(s.dateOnly()),
  expectedFundsAvailableDate: s.optionalNullable(s.dateOnly()),
  status: s.optionalNullable(s.lazy(() => sweepStatusSchema)),
  trigger: s.optionalNullable(s.lazy(() => sweepTriggerSchema)),
  description: s.optional(s.string()),
  networkTraceId: s.optionalNullable(s.string()),
  failureReason: s.optionalNullable(s.lazy(() => sweepFailureSchema)),
  _keysMap: {
    fundingAccountId: "funding_account_id",
    ledgerId: "ledger_id",
    isoCurrencyCode: "iso_currency_code",
    expectedFundsAvailableDate: "expected_funds_available_date",
    networkTraceId: "network_trace_id",
    failureReason: "failure_reason",
  },
});
