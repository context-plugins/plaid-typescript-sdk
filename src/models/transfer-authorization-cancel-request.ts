import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/authorization/cancel` */
export type TransferAuthorizationCancelRequest = {
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
  /** Plaid's unique identifier for a transfer authorization. */
  authorizationId: string;
};

export const transferAuthorizationCancelRequestSchema: Schema<TransferAuthorizationCancelRequest> =
  s.object<TransferAuthorizationCancelRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    authorizationId: s.string(),
    _keysMap: {
      clientId: "client_id",
      authorizationId: "authorization_id",
    },
  });
