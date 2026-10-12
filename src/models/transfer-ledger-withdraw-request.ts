import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferNetworkSchema, type TransferNetwork } from "./transfer-network.js";

/** Defines the request schema for `/transfer/ledger/withdraw` */
export type TransferLedgerWithdrawRequest = {
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
   * Specify which ledger balance to withdraw from. Customers can find a list of `ledger_id`s in the
   * Accounts page of your Plaid Dashboard. If this field is left blank, this will default to the id
   * of the default ledger balance.
   */
  ledgerId?: string | null;
  /**
   * A positive amount of how much will be withdrawn from the ledger balance (decimal string with
   * two digits of precision e.g. "5.50").
   */
  amount: string;
  /**
   * The description of the deposit that will be passed to the receiving bank (up to 10 characters).
   * Note that banks utilize this field differently, and may or may not show it on the bank
   * statement.
   */
  description?: string | null;
  /**
   * A unique key provided by the client, per unique ledger withdraw. Maximum of 50 characters.
   *
   * The API supports idempotency for safely retrying the request without accidentally performing
   * the same operation twice. For example, if a request to create a ledger withdraw fails due to a
   * network connection error, you can retry the request with the same idempotency key to guarantee
   * that only a single withdraw is created.
   */
  idempotencyKey: string;
  /**
   * The network or rails used for the transfer.
   *
   * For transfers submitted as `ach` or `same-day-ach`, the Standard ACH cutoff is 8:30 PM Eastern
   * Time.
   *
   * For transfers submitted as `same-day-ach`, the Same Day ACH cutoff is 3:00 PM Eastern Time. It
   * is recommended to send the request 15 minutes prior to the cutoff to ensure that it will be
   * processed in time for submission before the cutoff. If the transfer is processed after this
   * cutoff but before the Standard ACH cutoff, it will be sent over Standard ACH rails and will not
   * incur same-day charges; this will apply to both legs of the transfer if applicable. The
   * transaction limit for a Same Day ACH transfer is $1,000,000. Authorization requests sent with
   * an amount greater than $1,000,000 will fail.
   *
   * For transfers submitted as `rtp`, Plaid will automatically route between the Real-Time Payments
   * (RTP) rail by TCH or FedNow rails as necessary. If a transfer is submitted as `rtp` and the
   * counterparty account is not eligible for RTP, the `/transfer/authorization/create` request will
   * fail with an `INVALID_FIELD` error code. To pre-check to determine whether a counterparty
   * account can support RTP, call `/transfer/capabilities/get` before calling
   * `/transfer/authorization/create`.
   *
   * Wire transfers are currently in early availability. To request access to `wire` as a payment
   * network, contact your account manager. For transfers submitted as `wire`, the `type` must be
   * `credit`; wire debits are not supported. The cutoff to submit a wire payment is 6:30 PM Eastern
   * Time on a business day; wires submitted after that time will be processed on the next business
   * day. The transaction limit for a wire is $999,999.99. Authorization requests sent with an
   * amount greater than $999,999.99 will fail.
   *
   * Support for `rfp` (request for payment) is currently in closed beta. To learn more, contact
   * your Plaid account manager. For transfers submitted as `rfp`, the `type` must be `debit`.
   */
  network: TransferNetwork;
};

export const transferLedgerWithdrawRequestSchema: Schema<TransferLedgerWithdrawRequest> =
  s.object<TransferLedgerWithdrawRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    fundingAccountId: s.optionalNullable(s.string()),
    ledgerId: s.optionalNullable(s.string()),
    amount: s.string(),
    description: s.optionalNullable(s.string()),
    idempotencyKey: s.string(),
    network: transferNetworkSchema,
    _keysMap: {
      clientId: "client_id",
      originatorClientId: "originator_client_id",
      fundingAccountId: "funding_account_id",
      ledgerId: "ledger_id",
      idempotencyKey: "idempotency_key",
    },
  });
