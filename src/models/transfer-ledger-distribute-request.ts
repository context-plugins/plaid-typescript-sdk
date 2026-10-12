import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/ledger/distribute` */
export type TransferLedgerDistributeRequest = {
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
  /** The Ledger to pull money from. */
  fromLedgerId: string;
  /** The Ledger to credit money to. */
  toLedgerId: string;
  /**
   * The amount to move (decimal string with two digits of precision e.g. "10.00"). Amount must be
   * positive.
   */
  amount: string;
  /**
   * A unique key provided by the client, per unique ledger distribute. Maximum of 50 characters.
   *
   * The API supports idempotency for safely retrying the request without accidentally performing
   * the same operation twice. For example, if a request to create a ledger distribute fails due to
   * a network connection error, you can retry the request with the same idempotency key to
   * guarantee that only a single distribute is created.
   */
  idempotencyKey: string;
  /** An optional description for the ledger distribute operation. */
  description?: string;
};

export const transferLedgerDistributeRequestSchema: Schema<TransferLedgerDistributeRequest> =
  s.object<TransferLedgerDistributeRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    fromLedgerId: s.string(),
    toLedgerId: s.string(),
    amount: s.string(),
    idempotencyKey: s.string(),
    description: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      fromLedgerId: "from_ledger_id",
      toLedgerId: "to_ledger_id",
      idempotencyKey: "idempotency_key",
    },
  });
