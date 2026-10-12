import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankTransferEventListBankTransferTypeSchema,
  type BankTransferEventListBankTransferType,
} from "./bank-transfer-event-list-bank-transfer-type.js";
import {
  bankTransferEventListDirectionSchema,
  type BankTransferEventListDirection,
} from "./bank-transfer-event-list-direction.js";
import { bankTransferEventTypeSchema, type BankTransferEventType } from "./bank-transfer-event-type.js";

/** Defines the request schema for `/bank_transfer/event/list` */
export type BankTransferEventListRequest = {
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
  /** Plaid's unique identifier for a bank transfer. */
  bankTransferId?: string | null;
  /** The account ID to get events for all transactions to/from an account. */
  accountId?: string | null;
  /**
   * The type of bank transfer. This will be either `debit` or `credit`. A `debit` indicates a
   * transfer of money into your origination account; a `credit` indicates a transfer of money out
   * of your origination account.
   */
  bankTransferType?: BankTransferEventListBankTransferType | null;
  /** Filter events by event type. */
  eventTypes?: BankTransferEventType[];
  /**
   * The maximum number of bank transfer events to return. If the number of events matching the
   * above parameters is greater than `count`, the most recent events will be returned.
   *
   * @default 25
   */
  count?: number | null;
  /**
   * The offset into the list of bank transfer events. When `count`=25 and `offset`=0, the first 25
   * events will be returned. When `count`=25 and `offset`=25, the next 25 bank transfer events will
   * be returned.
   *
   * @default 0
   */
  offset?: number | null;
  /** The origination account ID to get events for transfers from a specific origination account. */
  originationAccountId?: string | null;
  /**
   * Indicates the direction of the transfer: `outbound`: for API-initiated transfers `inbound`: for
   * payments received by the FBO account.
   */
  direction?: BankTransferEventListDirection | null;
};

export const bankTransferEventListRequestSchema: Schema<BankTransferEventListRequest> =
  s.object<BankTransferEventListRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    startDate: s.optionalNullable(s.dateTime()),
    endDate: s.optionalNullable(s.dateTime()),
    bankTransferId: s.optionalNullable(s.string()),
    accountId: s.optionalNullable(s.string()),
    bankTransferType: s.optionalNullable(s.lazy(() => bankTransferEventListBankTransferTypeSchema)),
    eventTypes: s.optional(s.array(s.lazy(() => bankTransferEventTypeSchema))),
    count: s.defaulted(s.nullable(s.int()), 25),
    offset: s.defaulted(s.nullable(s.int()), 0),
    originationAccountId: s.optionalNullable(s.string()),
    direction: s.optionalNullable(s.lazy(() => bankTransferEventListDirectionSchema)),
    _keysMap: {
      clientId: "client_id",
      startDate: "start_date",
      endDate: "end_date",
      bankTransferId: "bank_transfer_id",
      accountId: "account_id",
      bankTransferType: "bank_transfer_type",
      eventTypes: "event_types",
      originationAccountId: "origination_account_id",
    },
  });
