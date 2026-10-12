import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/ledger/get` */
export type TransferLedgerGetRequest = {
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
   * Specify which ledger balance to get. Customers can find a list of `ledger_id`s in the Accounts
   * page of your Plaid Dashboard. If this field is left blank, this will default to the id of the
   * default ledger balance.
   */
  ledgerId?: string | null;
  /** Client ID of the end customer. */
  originatorClientId?: string | null;
};

export const transferLedgerGetRequestSchema: Schema<TransferLedgerGetRequest> =
  s.object<TransferLedgerGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    ledgerId: s.optionalNullable(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      ledgerId: "ledger_id",
      originatorClientId: "originator_client_id",
    },
  });
