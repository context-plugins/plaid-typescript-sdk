import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the request schema for `/transfer/intent/get` */
export type TransferIntentGetRequest = {
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
  /** Plaid's unique identifier for a transfer intent object. */
  transferIntentId: string;
};

export const transferIntentGetRequestSchema: Schema<TransferIntentGetRequest> =
  s.object<TransferIntentGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    transferIntentId: s.string(),
    _keysMap: {
      clientId: "client_id",
      transferIntentId: "transfer_intent_id",
    },
  });
