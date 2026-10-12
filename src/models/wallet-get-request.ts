import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** WalletGetRequest defines the request schema for `/wallet/get` */
export type WalletGetRequest = {
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
  /** The ID of the e-wallet */
  walletId: string;
};

export const walletGetRequestSchema: Schema<WalletGetRequest> = s.object<WalletGetRequest>({
  clientId: s.optional(s.string()),
  secret: s.optional(s.string()),
  walletId: s.string(),
  _keysMap: {
    clientId: "client_id",
    walletId: "wallet_id",
  },
});
