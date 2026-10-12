import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sweepFailureSchema, type SweepFailure } from "./sweep-failure.js";
import { sweepStatusSchema, type SweepStatus } from "./sweep-status.js";
import { sweepTriggerSchema, type SweepTrigger } from "./sweep-trigger.js";

/**
 * A sweep returned from the `/sandbox/transfer/sweep/simulate` endpoint. Can be null if there are
 * no transfers to include in a sweep.
 */
export type SimulatedTransferSweep = {
  /** Identifier of the sweep. */
  id: string;
  /**
   * The id of the funding account to use, available in the Plaid Dashboard. This determines which
   * of your business checking accounts will be credited or debited.
   */
  fundingAccountId: string;
  /** Plaid's unique identifier for a Plaid Ledger Balance. */
  ledgerId?: string | null;
  /** The datetime when the sweep occurred, in RFC 3339 format. */
  created: Date;
  /**
   * Signed decimal amount of the sweep as it appears on your sweep account ledger (e.g. "-10.00")
   *
   * If amount is not present, the sweep was net-settled to zero and outstanding debits and credits
   * between the sweep account and Plaid are balanced.
   */
  amount: string;
  /** The currency of the sweep, e.g. "USD". */
  isoCurrencyCode: string;
  /** The date when the sweep settled, in the YYYY-MM-DD format. */
  settled: string | null;
  /**
   * The expected date when funds from a ledger deposit will be made available and can be withdrawn
   * from the associated ledger balance. Only applies to deposits. This will be of the form
   * YYYY-MM-DD.
   */
  expectedFundsAvailableDate?: string | null;
  /**
   * The status of a sweep transfer
   *
   * `"pending"` - The sweep is currently pending `"posted"` - The sweep has been posted `"settled"`
   * - The sweep has settled. This is the terminal state of a successful credit sweep. `"returned"`
   * - The sweep has been returned. This is the terminal state of a returned sweep. Returns of a
   * sweep are extremely rare, since sweeps are money movement between your own bank account and
   * your own Ledger. `"funds_available"` - Funds from the sweep have been released from hold and
   * applied to the ledger's available balance. (Only applicable to deposits.) This is the terminal
   * state of a successful deposit sweep. `"failed"` - The sweep has failed. This is the terminal
   * state of a failed sweep.
   */
  status?: SweepStatus | null;
  /**
   * The trigger of the sweep
   *
   * `"manual"` - The sweep is created manually by the customer `"incoming"` - The sweep is created
   * by incoming funds flow (e.g. Incoming Wire) `"balance_threshold"` - The sweep is created by
   * balance threshold setting `"automatic_aggregate"` - The sweep is created by the Plaid automatic
   * aggregation process. These funds did not pass through the Plaid Ledger balance.
   */
  trigger?: SweepTrigger | null;
  /**
   * The description of the deposit that will be passed to the receiving bank (up to 10 characters).
   * Note that banks utilize this field differently, and may or may not show it on the bank
   * statement.
   */
  description?: string;
  /**
   * The trace identifier for the transfer based on its network. This will only be set after the
   * transfer has posted.
   *
   * For `ach` or `same-day-ach` transfers, this is the ACH trace number. For `rtp` transfers, this
   * is the Transaction Identification number. For `wire` transfers, this is the IMAD (Input Message
   * Accountability Data) number.
   */
  networkTraceId?: string | null;
  /**
   * The failure reason if the status for a sweep is `"failed"` or `"returned"`. Null value
   * otherwise.
   */
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
