import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** BankTransferSweepListRequest defines the request schema for `/bank_transfer/sweep/list` */
export type BankTransferSweepListRequest = {
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
  /**
   * If multiple origination accounts are available, `origination_account_id` must be used to
   * specify the account that the sweeps belong to.
   */
  originationAccountId?: string | null;
  /** The start `created` datetime of sweeps to return (RFC 3339 format). */
  startTime?: Date | null;
  /** The end `created` datetime of sweeps to return (RFC 3339 format). */
  endTime?: Date | null;
  /** The maximum number of sweeps to return. @default 25 */
  count?: number | null;
};

export const bankTransferSweepListRequestSchema: Schema<BankTransferSweepListRequest> =
  s.object<BankTransferSweepListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originationAccountId: s.optionalNullable(s.string()),
    startTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    count: s.defaulted(s.nullable(s.int()), 25),
    _keysMap: {
      clientId: "client_id",
      originationAccountId: "origination_account_id",
      startTime: "start_time",
      endTime: "end_time",
    },
  });
