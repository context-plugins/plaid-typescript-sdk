import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** StatementsRefreshRequest defines the request schema for `/statements/refresh` */
export type StatementsRefreshRequest = {
  /** The access token associated with the Item for which data is being requested. */
  accessToken: string;
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
   * The start date for statements, in "YYYY-MM-DD" format, e.g. "2023-08-30". To determine whether
   * a statement falls within the specified date range, Plaid will use the statement posted date.
   * The statement posted date is typically either the last day of the statement period, or the
   * following day.
   */
  startDate: string;
  /**
   * The end date for statements, in "YYYY-MM-DD" format, e.g. "2023-10-30". You can request up to
   * two years of data. To determine whether a statement falls within the specified date range,
   * Plaid will use the statement posted date. The statement posted date is typically either the
   * last day of the statement period, or the following day.
   */
  endDate: string;
};

export const statementsRefreshRequestSchema: Schema<StatementsRefreshRequest> =
  s.object<StatementsRefreshRequest>({
    accessToken: s.string(),
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    _keysMap: {
      accessToken: "access_token",
      clientId: "client_id",
      startDate: "start_date",
      endDate: "end_date",
    },
  });
