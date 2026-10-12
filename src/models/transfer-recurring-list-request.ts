import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/recurring/list` */
export type TransferRecurringListRequest = {
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
   * The start `created` datetime of recurring transfers to list. This should be in RFC 3339 format
   * (i.e. `2019-12-06T22:35:49Z`)
   */
  startTime?: Date | null;
  /**
   * The end `created` datetime of recurring transfers to list. This should be in RFC 3339 format
   * (i.e. `2019-12-06T22:35:49Z`)
   */
  endTime?: Date | null;
  /** The maximum number of recurring transfers to return. @default 25 */
  count?: number;
  /** The number of recurring transfers to skip before returning results. @default 0 */
  offset?: number;
  /** Filter recurring transfers to only those with the specified `funding_account_id`. */
  fundingAccountId?: string | null;
};

export const transferRecurringListRequestSchema: Schema<TransferRecurringListRequest> =
  s.object<TransferRecurringListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    count: s.defaulted(s.int(), 25),
    offset: s.defaulted(s.int(), 0),
    fundingAccountId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      startTime: "start_time",
      endTime: "end_time",
      fundingAccountId: "funding_account_id",
    },
  });
