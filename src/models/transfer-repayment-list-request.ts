import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/repayment/list` */
export type TransferRepaymentListRequest = {
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
  /** The start `created` datetime of repayments to return (RFC 3339 format). */
  startDate?: Date | null;
  /** The end `created` datetime of repayments to return (RFC 3339 format). */
  endDate?: Date | null;
  /** The maximum number of repayments to return. @default 25 */
  count?: number | null;
  /** The number of repayments to skip before returning results. @default 0 */
  offset?: number;
};

export const transferRepaymentListRequestSchema: Schema<TransferRepaymentListRequest> =
  s.object<TransferRepaymentListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.optionalNullable(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
    count: s.defaulted(s.nullable(s.int()), 25),
    offset: s.defaulted(s.int(), 0),
    _keysMap: {
      clientId: "client_id",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
