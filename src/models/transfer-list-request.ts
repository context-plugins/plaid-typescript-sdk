import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/list` */
export type TransferListRequest = {
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
   * The start `created` datetime of transfers to list. This should be in RFC 3339 format (i.e.
   * `2019-12-06T22:35:49Z`)
   */
  startDate?: Date | null;
  /**
   * The end `created` datetime of transfers to list. This should be in RFC 3339 format (i.e.
   * `2019-12-06T22:35:49Z`)
   */
  endDate?: Date | null;
  /** The maximum number of transfers to return. @default 25 */
  count?: number;
  /** The number of transfers to skip before returning results. @default 0 */
  offset?: number;
  /**
   * Filter transfers to only those originated through the specified origination account.
   *
   * @deprecated
   */
  originationAccountId?: string | null;
  /** Filter transfers to only those with the specified originator client. */
  originatorClientId?: string | null;
  /** Filter transfers to only those with the specified `funding_account_id`. */
  fundingAccountId?: string | null;
};

export const transferListRequestSchema: Schema<TransferListRequest> = s.object<TransferListRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  startDate: s.optionalNullable(s.dateTime()),
  endDate: s.optionalNullable(s.dateTime()),
  count: s.defaulted(s.int(), 25),
  offset: s.defaulted(s.int(), 0),
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
