import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sweepStatusSchema, type SweepStatus } from "./sweep-status.js";
import { sweepTriggerSchema, type SweepTrigger } from "./sweep-trigger.js";

/** Defines the request schema for `/transfer/sweep/list` */
export type TransferSweepListRequest = {
  /**
   * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the
   * `PLAID-CLIENT-ID` header or as part of a request body.
   */
  clientId?: string;
  /**
   * Your Plaid API `secret`. The `secret` is required and may be provided either in the
   * `PLAID-SECRET` header or as part of a request body.
   */
  secret?: string;
  /** The start `created` datetime of sweeps to return (RFC 3339 format). */
  startDate?: Date | null;
  /** The end `created` datetime of sweeps to return (RFC 3339 format). */
  endDate?: Date | null;
  /** The maximum number of sweeps to return. @default 25 */
  count?: number | null;
  /** The number of sweeps to skip before returning results. @default 0 */
  offset?: number;
  /** Filter sweeps to only those with the specified amount. */
  amount?: string | null;
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
  /** Filter sweeps to only those with the specified originator client. */
  originatorClientId?: string | null;
  /** Filter sweeps to only those with the specified `funding_account_id`. */
  fundingAccountId?: string | null;
  /** Filter sweeps to only those with the included `transfer_id`. */
  transferId?: string | null;
  /**
   * The trigger of the sweep
   *
   * `"manual"` - The sweep is created manually by the customer `"incoming"` - The sweep is created
   * by incoming funds flow (e.g. Incoming Wire) `"balance_threshold"` - The sweep is created by
   * balance threshold setting `"automatic_aggregate"` - The sweep is created by the Plaid automatic
   * aggregation process. These funds did not pass through the Plaid Ledger balance.
   */
  trigger?: SweepTrigger | null;
};

export const transferSweepListRequestSchema: Schema<TransferSweepListRequest> =
  s.object<TransferSweepListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.optionalNullable(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
    count: s.defaulted(s.nullable(s.int()), 25),
    offset: s.defaulted(s.int(), 0),
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
