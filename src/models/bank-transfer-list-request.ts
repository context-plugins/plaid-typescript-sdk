import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferDirectionSchema, type BankTransferDirection } from "./bank-transfer-direction.js";

/** Defines the request schema for `/bank_transfer/list` */
export type BankTransferListRequest = {
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
   * The start datetime of bank transfers to list. This should be in RFC 3339 format (i.e.
   * `2019-12-06T22:35:49Z`)
   */
  startDate?: Date | null;
  /**
   * The end datetime of bank transfers to list. This should be in RFC 3339 format (i.e.
   * `2019-12-06T22:35:49Z`)
   */
  endDate?: Date | null;
  /** The maximum number of bank transfers to return. @default 25 */
  count?: number;
  /** The number of bank transfers to skip before returning results. @default 0 */
  offset?: number;
  /** Filter bank transfers to only those originated through the specified origination account. */
  originationAccountId?: string | null;
  /**
   * Indicates the direction of the transfer: `outbound` for API-initiated transfers, or `inbound`
   * for payments received by the FBO account.
   */
  direction?: BankTransferDirection | null;
};

export const bankTransferListRequestSchema: Schema<BankTransferListRequest> =
  s.object<BankTransferListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.optionalNullable(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
    count: s.defaulted(s.int(), 25),
    offset: s.defaulted(s.int(), 0),
    originationAccountId: s.optionalNullable(s.string()),
    direction: s.optionalNullable(s.lazy(() => bankTransferDirectionSchema)),
    _keysMap: {
      clientId: "client_id",
      startDate: "start_date",
      endDate: "end_date",
      originationAccountId: "origination_account_id",
    },
  });
