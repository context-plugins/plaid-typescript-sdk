import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/return/recover` */
export type TransferReturnRecoverRequest = {
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
  /** The ID of the returned transfer that was recovered. */
  transferId: string;
  /**
   * The amount being recovered (decimal string with two digits of precision e.g. "10.00"). The sum
   * of recovered amounts across calls cannot exceed the original transfer's amount.
   */
  amount: string;
  /**
   * A random key provided by the client, per unique recovery. Maximum of 50 characters.
   *
   * The API supports idempotency for safely retrying requests without accidentally performing the
   * same operation twice. For example, if a request to report a recovery fails due to a network
   * connection error, you can retry the request with the same idempotency key to guarantee that
   * only a single recovery is recorded.
   */
  idempotencyKey: string;
};

export const transferReturnRecoverRequestSchema: Schema<TransferReturnRecoverRequest> =
  s.object<TransferReturnRecoverRequest>({
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
