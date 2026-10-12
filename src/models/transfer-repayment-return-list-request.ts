import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/repayment/return/list` */
export type TransferRepaymentReturnListRequest = {
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
  /** Identifier of the repayment to query. */
  repaymentId: string;
  /** The maximum number of repayments to return. @default 25 */
  count?: number | null;
  /** The number of repayments to skip before returning results. @default 0 */
  offset?: number;
};

export const transferRepaymentReturnListRequestSchema: Schema<TransferRepaymentReturnListRequest> =
  s.object<TransferRepaymentReturnListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    repaymentId: s.string(),
    count: s.defaulted(s.nullable(s.int()), 25),
    offset: s.defaulted(s.int(), 0),
    _keysMap: {
      clientId: "client_id",
      repaymentId: "repayment_id",
    },
  });
