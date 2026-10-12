import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/refund/create` */
export type TransferRefundCreateRequest = {
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
  /** The ID of the transfer to refund. */
  transferId: string;
  /** The amount of the refund (decimal string with two digits of precision e.g. "10.00"). */
  amount: string;
  /**
   * A random key provided by the client, per unique refund. Maximum of 50 characters.
   *
   * The API supports idempotency for safely retrying requests without accidentally performing the
   * same operation twice. For example, if a request to create a refund fails due to a network
   * connection error, you can retry the request with the same idempotency key to guarantee that
   * only a single refund is created.
   */
  idempotencyKey: string;
};

export const transferRefundCreateRequestSchema: Schema<TransferRefundCreateRequest> =
  s.object<TransferRefundCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    transferId: s.string(),
    amount: s.string(),
    idempotencyKey: s.string(),
    _keysMap: {
      clientId: "client_id",
      transferId: "transfer_id",
      idempotencyKey: "idempotency_key",
    },
  });
