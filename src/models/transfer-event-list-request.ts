import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  transferEventListTransferTypeSchema,
  type TransferEventListTransferType,
} from "./transfer-event-list-transfer-type.js";
import { transferEventTypeSchema, type TransferEventType } from "./transfer-event-type.js";

/** Defines the request schema for `/transfer/event/list` */
export type TransferEventListRequest = {
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
  /** Plaid's unique identifier for a transfer. */
  transferId?: string | null;
  /** The account ID to get events for all transactions to/from an account. */
  accountId?: string | null;
  /**
   * The type of transfer. This will be either `debit` or `credit`. A `debit` indicates a transfer
   * of money into your origination account; a `credit` indicates a transfer of money out of your
   * origination account.
   */
  transferType?: TransferEventListTransferType | null;
  /** Filter events by event type. */
  eventTypes?: TransferEventType[];
  /** Plaid's unique identifier for a sweep. */
  sweepId?: string;
  /**
   * The maximum number of transfer events to return. If the number of events matching the above
   * parameters is greater than `count`, the most recent events will be returned.
   *
   * @default 25
   */
  count?: number | null;
  /**
   * The offset into the list of transfer events. When `count`=25 and `offset`=0, the first 25
   * events will be returned. When `count`=25 and `offset`=25, the next 25 events will be returned.
   *
   * @default 0
   */
  offset?: number | null;
  /**
   * The origination account ID to get events for transfers from a specific origination account.
   *
   * @deprecated
   */
  originationAccountId?: string | null;
  /** Filter transfer events to only those with the specified originator client. */
  originatorClientId?: string | null;
  /** Filter transfer events to only those with the specified `funding_account_id`. */
  fundingAccountId?: string | null;
};

export const transferEventListRequestSchema: Schema<TransferEventListRequest> =
  s.object<TransferEventListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.optionalNullable(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
    transferId: s.optionalNullable(s.string()),
    accountId: s.optionalNullable(s.string()),
    transferType: s.optionalNullable(s.lazy(() => transferEventListTransferTypeSchema)),
    eventTypes: s.optional(s.array(s.lazy(() => transferEventTypeSchema))),
    sweepId: s.optional(s.string()),
    count: s.defaulted(s.nullable(s.int()), 25),
    offset: s.defaulted(s.nullable(s.int()), 0),
    originationAccountId: s.optionalNullable(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    fundingAccountId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      startDate: "start_date",
      endDate: "end_date",
      transferId: "transfer_id",
      accountId: "account_id",
      transferType: "transfer_type",
      eventTypes: "event_types",
      sweepId: "sweep_id",
      originationAccountId: "origination_account_id",
      originatorClientId: "originator_client_id",
      fundingAccountId: "funding_account_id",
    },
  });
