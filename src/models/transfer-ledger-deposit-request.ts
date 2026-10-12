import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferAchNetworkSchema, type TransferAchNetwork } from "./transfer-ach-network.js";

/** Defines the request schema for `/transfer/ledger/deposit` */
export type TransferLedgerDepositRequest = {
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
   * Client ID of the customer that owns the Ledger balance. This is so Plaid knows which of your
   * customers to pay out to or collect funds from. Only applicable for [Platform
   * customers](https://plaid.com/docs/transfer/application/#originators-vs-platforms). Do not
   * include if you're paying out to yourself.
   */
  originatorClientId?: string | null;
  /**
   * Specify which funding account to use. Customers can find a list of `funding_account_id`s in the
   * Accounts page of the Plaid Dashboard, under the "Account ID" column. If this field is left
   * blank, the funding account associated with the specified Ledger will be used. If an
   * `originator_client_id` is specified, the `funding_account_id` must belong to the specified
   * originator.
   */
  fundingAccountId?: string | null;
  /**
   * Specify which ledger balance to deposit to. Customers can find a list of `ledger_id`s in the
   * Accounts page of your Plaid Dashboard. If this field is left blank, this will default to the id
   * of the default ledger balance.
   */
  ledgerId?: string | null;
  /**
   * A positive amount of how much will be deposited into ledger (decimal string with two digits of
   * precision e.g. "5.50").
   */
  amount: string;
  /**
   * The description of the deposit that will be passed to the receiving bank (up to 10 characters).
   * Note that banks utilize this field differently, and may or may not show it on the bank
   * statement.
   */
  description?: string | null;
  /**
   * A unique key provided by the client, per unique ledger deposit. Maximum of 50 characters.
   *
   * The API supports idempotency for safely retrying the request without accidentally performing
   * the same operation twice. For example, if a request to create a ledger deposit fails due to a
   * network connection error, you can retry the request with the same idempotency key to guarantee
   * that only a single deposit is created.
   */
  idempotencyKey: string;
  /**
   * The ACH networks used for the funds flow.
   *
   * For requests submitted as either `ach` or `same-day-ach` the cutoff for Same Day ACH is 3:00 PM
   * Eastern Time and the cutoff for Standard ACH transfers is 8:30 PM Eastern Time. It is
   * recommended to submit a request at least 15 minutes before the cutoff time in order to ensure
   * that it will be processed before the cutoff. Any request that is indicated as `same-day-ach`
   * and that misses the Same Day ACH cutoff, but is submitted in time for the Standard ACH cutoff,
   * will be sent over Standard ACH rails and will not incur same-day charges.
   */
  network: TransferAchNetwork;
};

export const transferLedgerDepositRequestSchema: Schema<TransferLedgerDepositRequest> =
  s.object<TransferLedgerDepositRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    fundingAccountId: s.optionalNullable(s.string()),
    ledgerId: s.optionalNullable(s.string()),
    amount: s.string(),
    description: s.optionalNullable(s.string()),
    idempotencyKey: s.string(),
    network: transferAchNetworkSchema,
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      fundingAccountId: "funding_account_id",
      ledgerId: "ledger_id",
      idempotencyKey: "idempotency_key",
    },
  });
