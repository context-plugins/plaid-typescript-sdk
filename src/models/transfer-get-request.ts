import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/get` */
export type TransferGetRequest = {
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
  /** Plaid's unique identifier for a transfer. */
  transferId?: string;
  /** Plaid's unique identifier for a transfer authorization. */
  authorizationId?: string;
  /**
   * The Plaid client ID of the transfer originator. Should only be present if `client_id` is a
   * third-party sender (TPS).
   *
   * @deprecated
   */
  originatorClientId?: string | null;
};

export const transferGetRequestSchema: Schema<TransferGetRequest> = s.object<TransferGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  transferId: s.optional(s.string()),
  authorizationId: s.optional(s.string()),
  originatorClientId: s.optionalNullable(s.string()),
  _keysMap: {
    clientId: "client_id",
    transferId: "transfer_id",
    authorizationId: "authorization_id",
    originatorClientId: "originator_client_id",
  },
});
